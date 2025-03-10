import React, { useEffect, useState } from "react";
import { Box, ButtonBase, Rating, Typography } from "@mui/material";
import FavourateIcon from "../../icons/favourateIcon";
import StarIcon from "../../icons/starIcon";
import Image from "next/legacy/image";
import CartIcon from "../../icons/cartIcon";
import { darkColor, lightColor } from "../../src/utils/CustomTheme/color";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useTablet, useMobile } from "../../src/utils/responsive";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
interface IndexProps {
  data: any[any];
  fullDetailCard?: boolean;
  index?: number;
  isHomePage?: boolean;
}

const Index: React.FC<IndexProps> = ({
  fullDetailCard,
  data,
  index,
  isHomePage,
}) => {
  const favCartData = useSelector(
    (state: any) => state.addToFavCart.favCartData
  );
  useEffect(() => {
    const isProductFav = favCartData.filter(
      (favCartData: any) => favCartData._id === data._id
    );

    if (isProductFav.length === 1) {
      setFavProduct(true);
    } else {
      setFavProduct(false);
    }
  }, [favCartData]);

  const [favProduct, setFavProduct] = useState(false);
  const [timeLeft, setTimeLeft] = useState("");

  const dispatch = useDispatch();
  const isTablet = useTablet();
  const isMobile = useMobile();
  const theme: any = useSelector<any>((state) => state.themeToggle);
  const {
    name,
    price,
    discountPrice,
    isSale,
    offerTag,
    specification,
    productColor,
    _id,
    category,
  } = data;

  useEffect(() => {
    const currentDate = new Date(data.createdAt);
    const targetDate = new Date(currentDate.getTime() + 86400 * 1000);

    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        clearInterval(intervalId);
        setTimeLeft("Timer expired");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleFavProduct = () => {
    if (!favProduct) {
      setFavProduct(true);
      dispatch({ type: "ADD_TO_FAV_CART", payload: data });
    } else {
      setFavProduct(false);
      dispatch({ type: "REMOVE_FROM_FAV_CART", payload: data._id });
    }
  };

  const handleAddToCartBtn = (data: any) => {
    const dispatchData = {
      price: discountPrice,
      name,
      _id: `${data._id}colorId${data.productColor[0].id}`,
      image: productColor[0].imageURL[0],
      colorId: productColor[0].id,
    };
    dispatch({
      type: "ADD_TO_CART",
      payload: { product: dispatchData, quantity: 1, isCouponApply: false },
    });
    dispatch({ type: "ADD_IN_TOTAL_COST", payload: discountPrice });
    toast.success("Your product added to cart");
  };
  return (
    <>
      <Box
        display="flex"
        width={
          isTablet
            ? isMobile
              ? fullDetailCard
                ? "17rem"
                : "29.5rem"
              : "35rem"
            : fullDetailCard
            ? "35rem"
            : "90%"
        }
        height="55rem"
        paddingBottom="0px"
        flexDirection="column"
        alignItems="flex-start"
        gap="0.1rem"
        flexShrink="0"
        borderRadius={
          isMobile ? (fullDetailCard ? "0.8rem" : "1.6rem") : "1.6rem"
        }
        border={`1px solid ${
          theme === "light" ? lightColor.borderColor : darkColor.borderColor
        }`}
        bgcolor={theme === "light" ? lightColor.cardBG : darkColor.cardBG}
        overflow={"hidden"}
        position="relative"
        marginLeft={isHomePage ? (index === 0 ? "2rem" : 0) : 0}
        marginRight={isHomePage ? (index === 3 ? "2rem" : 0) : 0}
      >
        {offerTag ? (
          <Box
            display="flex"
            padding={
              isMobile
                ? fullDetailCard
                  ? "0.4rem 0.6rem"
                  : "0.6rem 1rem"
                : "0.6rem 1rem"
            }
            alignItems="center"
            position="absolute"
            top="0.4rem"
            borderRadius="0rem 0.4rem 0.4rem 0rem"
            bgcolor="#1D1D1F"
            zIndex="1"
            sx={{ borderTopLeftRadius: "1rem" }}
          >
            <Typography
              color={
                theme === "light"
                  ? lightColor.text.tagOffer
                  : darkColor.text.tagOffer
              }
              fontSize={
                isMobile ? (fullDetailCard ? "0.8rem" : "1.2rem") : "1.2rem"
              }
              fontStyle="normal"
              fontWeight="700"
              lineHeight="normal"
              letterSpacing="0.05rem"
            >
              {isSale
                ? `${Math.round(((price - discountPrice) / price) * 100)}% OFF`
                : offerTag === "daily_deals"
                ? timeLeft
                : offerTag.split("_").join(" ")}
            </Typography>
          </Box>
        ) : (
          ""
        )}

        <ButtonBase
          sx={{
            borderRadius: "50%",
            padding: "5px",
            position: "absolute",
            right: "0.5rem",
            top: "0.5rem",
            zIndex: "1",
          }}
          onClick={() => {
            handleFavProduct();
          }}
        >
          <FavourateIcon
            fill={favProduct ? "#FF0000" : ""}
            color={favProduct ? "#FF0000" : "white"}
          />
        </ButtonBase>
        <Box width="100%" height="auto">
          <Link
            // onClick={() => alert("test")}
            // href={`/product/${name}?pid=${_id}&sub_page_id=0&color_id=0&category_id=${category}&offerTag=${offerTag}`}
            href={`/product/${productColor[0].slug}`}
          >
            <Image
              src={data.productColor[0].imageURL[0]}
              loading="lazy"
              alt="card thumbnail"
              width={"350"}
              height={"290"}
              layout="responsive"
            />
          </Link>
        </Box>
        <Box
          display="flex"
          padding={isMobile ? "0.9rem" : "0.9rem 1.6rem"}
          flexDirection="column"
          justifyContent="end"
          alignItems="flex-start"
          gap="0.8rem"
          flex="1 0 0"
          alignSelf="stretch"
          borderRadius="0rem 0rem 1.6rem 1.6rem"
          bgcolor={theme === "light" ? lightColor.cardBG : darkColor.cardBG}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="0.8rem"
            width="100%"
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="0.4rem"
            >
              <Typography
                color={
                  theme === "light" ? lightColor.text.fade : darkColor.text.fade
                }
                textAlign="center"
                fontSize="1rem"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                letterSpacing="0.05rem"
              >
                {"4"}
              </Typography>
              <Box display="flex" alignItems="flex-start" gap="0.2rem">
                <Rating
                  name="simple-controlled"
                  size="small"
                  readOnly
                  value={2}
                  sx={{ fontSize: "1rem" }}
                />
              </Box>
            </Box>

            <Box
              display="flex"
              alignItems="center"
              gap="0.8rem"
              justifyContent="space-between"
              width="100%"
            >
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize={
                  isMobile ? (fullDetailCard ? "1.2rem" : "1.6rem") : "2rem"
                }
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                letterSpacing="0.05rem"
              >
                {name.length < 17 ? name : `${name.slice(0, 17)}...`}
              </Typography>
              <Box display="flex" alignItems="center" gap="0.6rem">
                {/* <Box
                  display="flex"
                  justifyContent="center"
                  alignContent="center"
                  position="relative"
                  width={isMobile ? "1.5rem" : "2rem"}
                  height={isMobile ? "1.5rem" : "2rem"}
                >
                  {productColor.slice(0, 3).map((data: any, index: any) => {
                    return (
                      <Box
                        key={data.id}
                        bgcolor={data.color}
                        width={isMobile ? "1.5rem" : "2rem"}
                        height={isMobile ? "1.5rem" : "2rem"}
                        borderRadius="20rem"
                        position="absolute"
                        left={
                          isMobile
                            ? `${
                                productColor.slice(0, 3).length - 1 - index * 7
                              }px`
                            : `${
                                productColor.slice(0, 3).length - 1 - index * 11
                              }px`
                        }
                        border={`0.5px solid ${
                          theme === "light"
                            ? lightColor.text.secondary
                            : darkColor.text.secondary
                        }`}
                      ></Box>
                    );
                  })}
                </Box> */}
                <Typography
                  color={
                    theme === "light"
                      ? lightColor.text.fade
                      : darkColor.text.fade
                  }
                  textAlign="center"
                  fontSize={isMobile ? "1rem" : "1.4rem"}
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="normal"
                  letterSpacing="0.05rem"
                >
                  {data.productColor.length > 3
                    ? `+${data.productColor.length - 3}`
                    : ""}
                </Typography>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="0.2rem"
            >
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                textAlign="center"
                fontSize={
                  isMobile ? (fullDetailCard ? "1.2rem" : "1.4rem") : "2rem"
                }
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                letterSpacing="0.05rem"
              >
                ₹{discountPrice}
              </Typography>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.secondary
                    : darkColor.text.secondary
                }
                textAlign="center"
                fontSize={
                  isMobile ? (fullDetailCard ? "0.6rem" : "1.2rem") : "1.2rem"
                }
                fontStyle="normal"
                fontWeight="500"
                lineHeight="normal"
                letterSpacing="0.05rem"
                sx={{ textDecorationLine: "line-through" }}
              >
                /₹{price}
              </Typography>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.offer
                    : darkColor.text.offer
                }
                textAlign="center"
                fontSize={
                  isMobile ? (fullDetailCard ? "0.8rem" : "1.2rem") : "1.2rem"
                }
                fontStyle="normal"
                fontWeight="700"
                lineHeight="normal"
                letterSpacing="0.05rem"
              >
                {Math.round(((price - discountPrice) / price) * 100)}% OFF
              </Typography>
              {isSale ? (
                <Box
                  display="flex"
                  padding="0.1rem 0.8rem"
                  justifyContent="center"
                  alignItems="center"
                  gap="1rem"
                  borderRadius="0.4rem"
                  bgcolor={
                    theme === "light"
                      ? lightColor.text.offer
                      : darkColor.text.offer
                  }
                >
                  <Typography
                    color={
                      theme === "light" ? lightColor.cardBG : darkColor.cardBG
                    }
                    textAlign="center"
                    fontSize={
                      isMobile ? (fullDetailCard ? "0.6rem" : "1rem") : "1rem"
                    }
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="normal"
                    letterSpacing="0.05rem"
                  >
                    Sale
                  </Typography>
                </Box>
              ) : (
                ""
              )}
            </Box>

            <Box
              width="100%"
              height="0.1rem"
              bgcolor={
                theme === "light"
                  ? lightColor.borderColor
                  : darkColor.borderColor
              }
            ></Box>

            {fullDetailCard ? (
              <Box display="flex" alignItems="center" gap="0.8rem">
                {specification.slice(0, 3).map((data: any, index: any) => {
                  return (
                    <Box
                      key={data.key}
                      display="flex"
                      padding="0.2rem 0.8rem"
                      justifyContent="center"
                      alignItems="center"
                      gap="1rem"
                      borderRadius="0.8rem"
                      border="0.1px solid #667085"
                      bgcolor="rgba(252, 252, 253, 0.80)"
                    >
                      <Typography
                        color="#667085"
                        textAlign="center"
                        fontSize={isMobile ? "0.6rem" : "0.8rem"}
                        fontStyle="normal"
                        fontWeight="400"
                        lineHeight="normal"
                        letterSpacing="0.05rem"
                        sx={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "clip",
                        }}
                      >
                        {data.label}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            ) : (
              ""
            )}

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              alignSelf="stretch"
              width="100%"
            >
              <ButtonBase
                onClick={() => handleAddToCartBtn(data)}
                sx={{
                  display: "flex",
                  height: isMobile
                    ? fullDetailCard
                      ? "2.4rem"
                      : "4rem"
                    : "4.2rem",

                  alignItems: "center",
                  gap: "0.8rem",
                  borderRadius: isMobile
                    ? fullDetailCard
                      ? "0.4rem"
                      : "0.8rem"
                    : "0.8rem",
                  border: "1px solid var(--light-orange, #FBC02D)",
                  bgcolor:
                    theme === "light"
                      ? lightColor.theme.primary
                      : darkColor.theme.primary,
                  width: "100%",
                }}
              >
                <Typography
                  color="#1D1D1F"
                  textAlign="center"
                  fontSize={
                    isMobile ? (fullDetailCard ? "1.2rem" : "1.6rem") : "2rem"
                  }
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="normal"
                  letterSpacing="0.05rem"
                >
                  Add To Cart
                </Typography>
                <CartIcon
                  width={
                    isMobile ? (fullDetailCard ? "1.2rem" : "1.8rem") : "1.8rem"
                  }
                  height={
                    isMobile ? (fullDetailCard ? "1.2rem" : "1.8rem") : "1.8rem"
                  }
                  color="black"
                />
              </ButtonBase>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
