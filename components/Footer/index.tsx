"use client";
import React, { useEffect, useState } from "react";
import { Box, ButtonBase, Typography, Grid } from "@mui/material";
import Image from "next/image";
import { lightColor, darkColor } from "../../src/utils/CustomTheme/color";
import styled from "@emotion/styled";
import { useMobile } from "@/utils/responsive";
import Link from "next/link";
import { useSelector } from "react-redux";
import axios from "axios";

const LI = styled.li<any>`
  color: ${(props) =>
    props.theme === "light" ? lightColor.text.primary : darkColor.text.primary};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 3rem;
  letter-spacing: 0.05rem;
  list-style: none;
`;

const Index = () => {
  const isMobile = useMobile();
  const theme: any = useSelector<any>((state) => state.themeToggle);
  const [categoryApiRes, setCategoryApiRes] = useState<any[]>([]);

  useEffect(() => {
    // get category api
    axios({
      method: "GET",
      url: "/api/category",
    })
      .then((res) => {
        setCategoryApiRes(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isMobile) {
    return (
      <Box>
        <Grid
          container
          marginTop="5rem"
          justifyItems="center"
          alignContent="center"
          padding="0rem 2rem"
          bgcolor={
            theme === "light" ? lightColor.navbarBG : darkColor.navbarBG
          }>
          <Grid
            item
            xs={12}
            display="flex"
            width="100%"
            height="32.2rem"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="3.2rem"
            flexShrink="0">
            <Box
              display="flex"
              width="100%"
              flexDirection="column"
              alignItems="center"
              gap="0.8rem">
              <Box width="100%" height="10.6rem" textAlign="center">
                <Image
                  src={`/assets/logo/${theme === "light" ? "logo-light.png" : "logo-dark.png"}`}
                  loading="lazy"
                  alt="Logo"
                  width={160}
                  height={50}
                />
              </Box>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="3.2rem"
                letterSpacing="0.02rem"
                alignSelf="stretch"
                textAlign="center">
                Subscribe to our newsletters
              </Typography>
            </Box>

            <Box width="100%" height="4.5rem" flexShrink="0">
              <Box
                display="flex"
                height="4.5rem"
                padding="1.2rem 2rem"
                alignItems="center"
                gap="1rem"
                flexShrink="0"
                borderRadius="0.4rem"
                border="1px solid var(--light-price-text, #B4B4B9)"
                justifyContent="space-between"
                paddingRight="0"
                borderRight="none">
                <input
                  style={{
                    color:
                      theme === "light"
                        ? lightColor.text.secondary
                        : darkColor.text.secondary,
                    height: "100%",
                    fontSize: "1.2rem",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "2.4rem",
                    letterSpacing: "0.05rem",
                    border: "none",
                    backgroundColor: "transparent",
                    outline: "none",
                  }}
                  placeholder="Enter your email address...."
                />
                <ButtonBase
                  sx={{
                    display: "flex",
                    width: "30%",
                    height: "4.5rem",
                    padding: "1.2rem 2rem",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                    flexShrink: "0",
                    borderRadius: "0rem 0.4rem 0.4rem 0rem",
                    bgcolor:
                      theme === "light"
                        ? lightColor.theme.primary
                        : darkColor.theme.primary,
                  }}>
                  <Typography
                    color="var(--text-color-wire, #F7F7F7)"
                    fontSize="1.2rem"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="2.4rem"
                    letterSpacing="0.05rem">
                    Subscribe
                  </Typography>
                </ButtonBase>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} alignContent="end">
            <Grid container>
              <Grid item xs={3}>
                <Typography
                  color={
                    theme === "light"
                      ? lightColor.text.primary
                      : darkColor.text.primary
                  }
                  fontSize="1.2rem"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="7.6rem"
                  letterSpacing="0.05rem">
                  About us
                </Typography>
                <LI theme={theme}>Brand story</LI>
              </Grid>

              <Grid item xs={3}>
                <Typography
                  color={
                    theme === "light"
                      ? lightColor.text.primary
                      : darkColor.text.primary
                  }
                  fontSize="1.2rem"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="7.6rem"
                  letterSpacing="0.05rem">
                  Contact us
                </Typography>
                <LI theme={theme}>Mobile no.</LI>
                <LI theme={theme}>Email</LI>
              </Grid>

              <Grid item xs={3}>
                <Typography
                  color={
                    theme === "light"
                      ? lightColor.text.primary
                      : darkColor.text.primary
                  }
                  fontSize="1.2rem"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="7.6rem"
                  letterSpacing="0.05rem">
                  More
                </Typography>
                <LI theme={theme}>Blogs</LI>
                <LI theme={theme}>Daily Deals</LI>
                <LI theme={theme}>Sale</LI>
                <LI theme={theme}>New Arrivals</LI>
                <LI theme={theme}>Best Seller</LI>
              </Grid>

              <Grid item xs={3}>
                <Typography
                  color={
                    theme === "light"
                      ? lightColor.text.primary
                      : darkColor.text.primary
                  }
                  fontSize="1.2rem"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="7.6rem"
                  letterSpacing="0.05rem">
                  Quick links
                </Typography>
                <Link
                  href={
                    "/category/Wired%20Headphone?pid=6562e8553b5c68fbd1873b3b"
                  }>
                  <LI theme={theme}>Wired Headphone</LI>
                </Link>
                <Link
                  href={
                    "/category/Wired%20Headphone?pid=6562e8553b5c68fbd1873b3b"
                  }>
                  <LI theme={theme}>Mobile Case</LI>
                </Link>
                <Link
                  href={
                    "/category/Wired%20Headphone?pid=6562e8553b5c68fbd1873b3b"
                  }>
                  <LI theme={theme}>Gaming Headphone</LI>
                </Link>
                <Link
                  href={
                    "/category/Wired%20Headphone?pid=6562e8553b5c68fbd1873b3b"
                  }>
                  <LI theme={theme}>Keychains</LI>
                </Link>
                <Link
                  href={
                    "/category/Wired%20Headphone?pid=6562e8553b5c68fbd1873b3b"
                  }>
                  <LI theme={theme}>Neckbands</LI>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box
          display="flex"
          width="100%"
          height="5.35rem"
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          bgcolor="black">
          <Box
            width="100%"
            height="2.9rem"
            justifyContent="center"
            alignItems="center"
            display="flex"
            gap="2rem">
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M16.1253 7.18681C15.6968 7.37684 15.2358 7.50536 14.7523 7.56276C15.2459 7.26703 15.6247 6.7991 15.8035 6.24061C15.3417 6.5146 14.8299 6.71336 14.2857 6.82049C13.8496 6.35612 13.2284 6.06592 12.5405 6.06592C11.2207 6.06592 10.1502 7.13637 10.1502 8.4562C10.1502 8.64355 10.1714 8.82591 10.2124 9.00096C8.2259 8.90131 6.46452 7.94976 5.28551 6.50319C5.0798 6.85614 4.96179 7.26703 4.96179 7.70501C4.96179 8.5341 5.38409 9.26603 6.02511 9.69457C5.63347 9.68227 5.26466 9.57478 4.94254 9.39527C4.94236 9.40543 4.94236 9.41559 4.94236 9.42557C4.94236 10.5837 5.76663 11.5497 6.8599 11.7692C6.65954 11.8241 6.44794 11.8531 6.23029 11.8531C6.07591 11.8531 5.92635 11.8383 5.78054 11.8105C6.08465 12.7599 6.96721 13.451 8.01342 13.4705C7.19521 14.1117 6.16469 14.4937 5.0445 14.4937C4.85198 14.4937 4.66125 14.4824 4.47461 14.4602C5.53187 15.1386 6.7886 15.5342 8.13838 15.5342C12.535 15.5342 14.9393 11.892 14.9393 8.73304C14.9393 8.62947 14.937 8.52626 14.9324 8.42393C15.3998 8.08702 15.805 7.66615 16.1253 7.18681Z"
                  fill="#1D1D1F"
                />
              </svg>
            </Box>

            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="none">
                <g clip-path="url(#clip0_1014_9972)">
                  <path
                    d="M19.6875 11.0001C19.6875 5.26625 15.3516 0.620605 10 0.620605C4.64844 0.620605 0.3125 5.26625 0.3125 11.0001C0.3125 16.1806 3.85508 20.4747 8.48633 21.254V14.0005H6.02539V11.0001H8.48633V8.71324C8.48633 6.11209 9.93164 4.67529 12.1453 4.67529C13.2055 4.67529 14.3141 4.87786 14.3141 4.87786V7.43087H13.0922C11.8891 7.43087 11.5137 8.2311 11.5137 9.05183V11.0001H14.2004L13.7707 14.0005H11.5137V21.254C16.1449 20.4747 19.6875 16.1806 19.6875 11.0001Z"
                    fill="#FBFBFB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1014_9972">
                    <rect
                      width="20"
                      height="21.4286"
                      fill="white"
                      transform="translate(0 0.285645)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Box>

            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M19.0853 5.1336C18.8672 4.26109 18.2246 3.57393 17.4088 3.34074C15.9299 2.91699 10 2.91699 10 2.91699C10 2.91699 4.07019 2.91699 2.59133 3.34074C1.77546 3.57397 1.1329 4.26109 0.914805 5.1336C0.518555 6.71506 0.518555 10.0146 0.518555 10.0146C0.518555 10.0146 0.518555 13.3142 0.914805 14.8957C1.1329 15.7682 1.77546 16.4267 2.59133 16.6599C4.07019 17.0837 10 17.0837 10 17.0837C10 17.0837 15.9299 17.0837 17.4088 16.6599C18.2246 16.4267 18.8672 15.7682 19.0853 14.8957C19.4815 13.3142 19.4815 10.0146 19.4815 10.0146C19.4815 10.0146 19.4815 6.71506 19.0853 5.1336ZM8.06064 13.0104V7.01887L13.0169 10.0147L8.06064 13.0104Z"
                  fill="#FBFBFB"
                />
              </svg>
            </Box>

            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none">
                <path
                  d="M10.0022 5.17403C7.16453 5.17403 4.87563 7.32877 4.87563 10.0001C4.87563 12.6715 7.16453 14.8263 10.0022 14.8263C12.8399 14.8263 15.1288 12.6715 15.1288 10.0001C15.1288 7.32877 12.8399 5.17403 10.0022 5.17403ZM10.0022 13.1377C8.16843 13.1377 6.66927 11.7307 6.66927 10.0001C6.66927 8.26963 8.16397 6.86254 10.0022 6.86254C11.8405 6.86254 13.3352 8.26963 13.3352 10.0001C13.3352 11.7307 11.836 13.1377 10.0022 13.1377ZM16.5343 4.97662C16.5343 5.60246 15.9989 6.10229 15.3385 6.10229C14.6737 6.10229 14.1428 5.59826 14.1428 4.97662C14.1428 4.35497 14.6782 3.85094 15.3385 3.85094C15.9989 3.85094 16.5343 4.35497 16.5343 4.97662ZM19.9297 6.11909C19.8539 4.61119 19.488 3.2755 18.3146 2.17503C17.1456 1.07456 15.7267 0.730138 14.1249 0.654533C12.4741 0.566327 7.52593 0.566327 5.87507 0.654533C4.27775 0.725938 2.8589 1.07036 1.68544 2.17083C0.511991 3.2713 0.150586 4.60699 0.0702733 6.11489C-0.0234244 7.66899 -0.0234244 12.3271 0.0702733 13.8812C0.146124 15.3891 0.511991 16.7248 1.68544 17.8253C2.8589 18.9257 4.27328 19.2701 5.87507 19.3458C7.52593 19.434 12.4741 19.434 14.1249 19.3458C15.7267 19.2743 17.1456 18.9299 18.3146 17.8253C19.4835 16.7248 19.8494 15.3891 19.9297 13.8812C20.0234 12.3271 20.0234 7.67319 19.9297 6.11909ZM17.797 15.5487C17.449 16.372 16.7752 17.0062 15.8963 17.338C14.58 17.8295 11.4568 17.716 10.0022 17.716C8.54769 17.716 5.41997 17.8253 4.1082 17.338C3.23369 17.0104 2.55996 16.3762 2.20747 15.5487C1.68544 14.3096 1.80591 11.3694 1.80591 10.0001C1.80591 8.63085 1.68991 5.68646 2.20747 4.45158C2.55549 3.62833 3.22922 2.99409 4.1082 2.66226C5.42443 2.17083 8.54769 2.28424 10.0022 2.28424C11.4568 2.28424 14.5845 2.17503 15.8963 2.66226C16.7708 2.98989 17.4445 3.62413 17.797 4.45158C18.319 5.69066 18.1985 8.63085 18.1985 10.0001C18.1985 11.3694 18.319 14.3138 17.797 15.5487Z"
                  fill="#FBFBFB"
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
  return (
    <>
      <Grid
        container
        marginTop="5rem"
        justifyItems="center"
        alignContent="center"
        height="44.2rem"
        padding="0rem 5rem"
        bgcolor={theme === "light" ? lightColor.navbarBG : darkColor.navbarBG}>
        <Grid
          item
          xs={6}
          display="flex"
          width="62.3rem"
          height="32.2rem"
          padding="0rem 3.3rem"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="3.2rem"
          flexShrink="0">
          <Box
            display="flex"
            width="46.9rem"
            flexDirection="column"
            alignItems="flex-start"
            gap="0.8rem">
            <Box width="11.3rem" height="10.6rem">
              <Image
                src={`/assets/logo/${theme === "light" ? "logo-light.png" : "logo-dark.png"}`}
                loading="lazy"
                alt="Logo"
                width={160}
                height={50}
              />
            </Box>
            <Typography
              color={
                theme === "light"
                  ? lightColor.text.primary
                  : darkColor.text.primary
              }
              fontSize="2.4rem"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="3.2rem"
              letterSpacing="0.02rem"
              alignSelf="stretch">
              Subscribe to our newsletters
            </Typography>
          </Box>

          <Box width="41.7rem" height="4.5rem" flexShrink="0">
            <Box
              display="flex"
              width="41.7rem"
              height="4.5rem"
              padding="1.2rem 2rem"
              alignItems="center"
              gap="1rem"
              flexShrink="0"
              borderRadius="0.4rem"
              border="1px solid #B4B4B9"
              justifyContent="space-between"
              paddingRight="0"
              borderRight="none">
              <input
                style={{
                  color:
                    theme === "light"
                      ? lightColor.text.secondary
                      : darkColor.text.secondary,
                  fontSize: "1.4rem",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "2.4rem",
                  letterSpacing: "0.05rem",
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                }}
                placeholder="Enter your email address...."
              />
              <ButtonBase
                sx={{
                  display: "flex",
                  width: "11.3rem",
                  height: "4.5rem",
                  padding: "1.2rem 2rem",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  flexShrink: "0",
                  borderRadius: "0rem 0.4rem 0.4rem 0rem",
                  bgcolor:
                    theme === "light"
                      ? lightColor.theme.primary
                      : darkColor.theme.primary,
                }}>
                <Typography
                  color={
                    theme === "dark"
                      ? lightColor.text.primary
                      : darkColor.text.white
                  }
                  fontSize="1.4rem"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="2.4rem"
                  letterSpacing="0.05rem">
                  Subscribe
                </Typography>
              </ButtonBase>
            </Box>
          </Box>

          <Box width="100%" height="2.9rem" display="flex" gap="2rem">
            {/* <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="29"
                viewBox="0 0 30 29"
                fill="none">
                <g clipPath="url(#clip0_445_787)">
                  <path
                    d="M15.0002 28.9997C23.0083 28.9997 29.5001 22.5079 29.5001 14.4999C29.5001 6.49181 23.0083 0 15.0002 0C6.99218 0 0.500366 6.49181 0.500366 14.4999C0.500366 22.5079 6.99218 28.9997 15.0002 28.9997Z"
                    fill={
                      theme === "light"
                        ? lightColor.text.primary
                        : darkColor.text.primary
                    }
                  />
                  <path
                    d="M23.8819 10.4207C23.2605 10.6962 22.5921 10.8826 21.8911 10.9658C22.6068 10.537 23.1561 9.85851 23.4153 9.04871C22.7456 9.44599 22.0035 9.73419 21.2144 9.88953C20.5822 9.21621 19.6814 8.79541 18.684 8.79541C16.7702 8.79541 15.2181 10.3475 15.2181 12.2613C15.2181 12.5329 15.2488 12.7974 15.3083 13.0512C12.4279 12.9067 9.87387 11.527 8.16432 9.42945C7.86604 9.94122 7.69493 10.537 7.69493 11.1721C7.69493 12.3742 8.30726 13.4355 9.23673 14.0569C8.66886 14.0391 8.13408 13.8832 7.66702 13.6229C7.66676 13.6377 7.66676 13.6524 7.66676 13.6669C7.66676 15.3462 8.86194 16.7468 10.4472 17.065C10.1566 17.1446 9.84983 17.1868 9.53424 17.1868C9.3104 17.1868 9.09354 17.1653 8.88211 17.125C9.32306 18.5016 10.6028 19.5037 12.1198 19.5319C10.9334 20.4616 9.43912 21.0155 7.81487 21.0155C7.53571 21.0155 7.25915 20.9993 6.98853 20.9669C8.52153 21.9507 10.3438 22.5243 12.3009 22.5243C18.6759 22.5243 22.1622 17.2431 22.1622 12.6627C22.1622 12.5125 22.1589 12.3629 22.1522 12.2145C22.8299 11.726 23.4174 11.1157 23.8819 10.4207Z"
                    fill={
                      theme === "dark"
                        ? lightColor.text.primary
                        : darkColor.text.white
                    }
                  />
                </g>
                <defs>
                  <clipPath id="clip0_445_787">
                    <rect
                      width="29"
                      height="29"
                      fill="white"
                      transform="translate(0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Box> */}

            <Link
              target="_blank"
              href="https://facebook.com/profile.php?id=100090222109795">
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="29"
                  viewBox="0 0 29 29"
                  fill="none">
                  <g clipPath="url(#clip0_445_792)">
                    <path
                      d="M28.0625 14.5C28.0625 6.74023 21.9922 0.453125 14.5 0.453125C7.00781 0.453125 0.9375 6.74023 0.9375 14.5C0.9375 21.511 5.89711 27.3223 12.3809 28.377V18.5606H8.93555V14.5H12.3809V11.4052C12.3809 7.88494 14.4043 5.94047 17.5034 5.94047C18.9877 5.94047 20.5397 6.21461 20.5397 6.21461V9.66969H18.8291C17.1447 9.66969 16.6191 10.7527 16.6191 11.8634V14.5H20.3805L19.779 18.5606H16.6191V28.377C23.1029 27.3223 28.0625 21.511 28.0625 14.5Z"
                      fill={
                        theme === "light"
                          ? lightColor.text.primary
                          : darkColor.text.primary
                      }
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_445_792">
                      <rect
                        width="28"
                        height="29"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Box>
            </Link>
            <Link
              target="_blank"
              href="https://youtube.com/@royalmobisol_india2159?si=gYtU-4Aq07kl_1ON">
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="26"
                  viewBox="0 0 29 26"
                  fill="none">
                  <path
                    d="M27.2194 6.30109C26.9141 5.10011 26.0145 4.15426 24.8722 3.83327C22.8019 3.25 14.5 3.25 14.5 3.25C14.5 3.25 6.19824 3.25 4.12784 3.83327C2.98563 4.15431 2.08603 5.10011 1.7807 6.30109C1.22595 8.47793 1.22595 13.0197 1.22595 13.0197C1.22595 13.0197 1.22595 17.5615 1.7807 19.7383C2.08603 20.9393 2.98563 21.8457 4.12784 22.1667C6.19824 22.75 14.5 22.75 14.5 22.75C14.5 22.75 22.8018 22.75 24.8722 22.1667C26.0145 21.8457 26.9141 20.9393 27.2194 19.7383C27.7741 17.5615 27.7741 13.0197 27.7741 13.0197C27.7741 13.0197 27.7741 8.47793 27.2194 6.30109ZM11.7849 17.1433V8.89611L18.7236 13.0198L11.7849 17.1433Z"
                    fill={
                      theme === "light"
                        ? lightColor.text.primary
                        : darkColor.text.primary
                    }
                  />
                </svg>
              </Box>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/royalmobisol_india?igsh=bnd6NTZxc2RsMDMy&utm_source=qr">
              <Box>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="29"
                  viewBox="0 0 30 29"
                  fill="none">
                  <path
                    d="M15.0032 7.06477C10.8886 7.06477 7.56966 10.3844 7.56966 14.5C7.56966 18.6156 10.8886 21.9352 15.0032 21.9352C19.1179 21.9352 22.4368 18.6156 22.4368 14.5C22.4368 10.3844 19.1179 7.06477 15.0032 7.06477ZM15.0032 19.3339C12.3442 19.3339 10.1704 17.1661 10.1704 14.5C10.1704 11.8339 12.3378 9.66613 15.0032 9.66613C17.6687 9.66613 19.836 11.8339 19.836 14.5C19.836 17.1661 17.6622 19.3339 15.0032 19.3339ZM24.4747 6.76063C24.4747 7.72481 23.6984 8.49487 22.7409 8.49487C21.7769 8.49487 21.007 7.71834 21.007 6.76063C21.007 5.80291 21.7834 5.02639 22.7409 5.02639C23.6984 5.02639 24.4747 5.80291 24.4747 6.76063ZM29.3981 8.52075C29.2881 6.19765 28.7576 4.13985 27.0561 2.44444C25.3611 0.749024 23.3037 0.218398 20.9812 0.101919C18.5874 -0.033973 11.4126 -0.033973 9.01885 0.101919C6.70273 0.211927 4.6454 0.742553 2.94389 2.43797C1.24239 4.13338 0.718349 6.19117 0.601896 8.51428C0.466035 10.9086 0.466035 18.085 0.601896 20.4792C0.71188 22.8024 1.24239 24.8601 2.94389 26.5556C4.6454 28.251 6.69626 28.7816 9.01885 28.8981C11.4126 29.034 18.5874 29.034 20.9812 28.8981C23.3037 28.7881 25.3611 28.2574 27.0561 26.5556C28.7511 24.8601 29.2817 22.8024 29.3981 20.4792C29.534 18.085 29.534 10.915 29.3981 8.52075ZM26.3056 23.0483C25.801 24.3166 24.8241 25.2937 23.5496 25.8049C21.6411 26.562 17.1123 26.3873 15.0032 26.3873C12.8941 26.3873 8.35895 26.5556 6.45689 25.8049C5.18885 25.3002 4.21194 24.323 3.70084 23.0483C2.94389 21.1393 3.11857 16.6096 3.11857 14.5C3.11857 12.3904 2.95036 7.85423 3.70084 5.95175C4.20547 4.68342 5.18238 3.70629 6.45689 3.19508C8.36542 2.43797 12.8941 2.61269 15.0032 2.61269C17.1123 2.61269 21.6475 2.44444 23.5496 3.19508C24.8176 3.69982 25.7945 4.67695 26.3056 5.95175C27.0626 7.8607 26.8879 12.3904 26.8879 14.5C26.8879 16.6096 27.0626 21.1458 26.3056 23.0483Z"
                    fill={
                      theme === "light"
                        ? lightColor.text.primary
                        : darkColor.text.primary
                    }
                  />
                </svg>
              </Box>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6} alignContent="end">
          <Grid container height="23.6rem">
            <Grid item xs={3}>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="7.6rem"
                letterSpacing="0.05rem">
                About us
              </Typography>
              <Link href={"/about-us"}>
                <LI theme={theme}>Brand story</LI>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="7.6rem"
                letterSpacing="0.05rem">
                Contact us
              </Typography>
              <LI theme={theme}>+919650001541</LI>
              <Link target="_blank" href={"mailto:info@triocomet.com"}>
              <LI theme={theme}>Email</LI>
              </Link>
            </Grid>

            <Grid item xs={3}>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="7.6rem"
                letterSpacing="0.05rem">
                Quick links
              </Typography>
              {categoryApiRes.slice(0, 5).map((data, index) => {
                return (
                  <Link key={data._id} href={`/category/${data.name}?pid=${data._id}`}>
                    <LI theme={theme}>{data.name}</LI>
                  </Link>
                );
              })}
            </Grid>

            <Grid item xs={3}>
              <Typography
                color={
                  theme === "light"
                    ? lightColor.text.primary
                    : darkColor.text.primary
                }
                fontSize="1.6rem"
                fontStyle="normal"
                fontWeight="700"
                lineHeight="7.6rem"
                letterSpacing="0.05rem">
                More
              </Typography>
              <Link href={"/blog-collection"}>
                <LI theme={theme}>Blogs</LI>
              </Link>
              <Link href={"/product-collection/daily_deals"}>
                <LI theme={theme}>Daily Deals</LI>
              </Link>
              <Link href={"/product-collection/sale"}>
                <LI theme={theme}>Sale</LI>
              </Link>
              <Link href={"/product-collection/new_arrivals"}>
                <LI theme={theme}>New Arrivals</LI>
              </Link>
              <Link href={"/product-collection/best_seller"}>
                <LI theme={theme}>Best Seller</LI>
              </Link>
            </Grid>
          </Grid>
          <Box
            display="flex"
            gap="1.6rem"
            justifyContent="center"
            alignItems="center"
            marginTop="4rem">
            <Box width="12.5rem" height="1.7rem">
              <Image
                width={125}
                height={17}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/1.png`}
              />
            </Box>
            <Box width="4.5rem" height="1.5rem">
              <Image
                width={45}
                height={15}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/2.png`}
              />
            </Box>
            <Box width="2.6rem" height="2rem">
              <Image
                width={26}
                height={20}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/3.png`}
              />
            </Box>
            <Box width="9.9rem" height="2.7rem">
              <Image
                width={99}
                height={27}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/4.png`}
              />
            </Box>
            <Box width="2.8rem" height="2.8rem">
              <Image
                width={28}
                height={28}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/5.png`}
              />
            </Box>
            <Box width="4rem" height="1.3rem">
              <Image
                width={40}
                height={13}
                layout="responsive"
                alt={"payment logo"}
                src={`/assets/paymentLogo/6.png`}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Index;
