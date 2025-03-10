"use client";
import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import PageSpacing from "@components/PageSpacing";
import { lightColor, darkColor } from "@/utils/CustomTheme/color";
import Card from "@components/Card";
import axios from "axios";
import BreadCrumb from "@components/BreadCrumb";
import { useMobile } from "@/utils/responsive";
import ProductCardSkeleton from "@components/Skeleton/ProductCardSkeleton";
import NoProduct from "../../../icons/noProduct";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import MobileSearch from "@components/Search";
const Search = (props: any) => {
  const queryParams = useSearchParams();
  const category = queryParams.get("category");
  const query = queryParams.get("query");
  const [categoryParamState, setCategoryParamState] = useState(category);
  const [queryParamState, setQueryParamState] = useState(query);
  const [productApiRes, setProductApiRes] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isMobile = useMobile();
  const pathname = usePathname();
  const toggleState = useSelector((state: any) => state.searchToggle);
  const theme: any = useSelector<any>((state) => state.themeToggle);
  useEffect(() => {
    axios({
      method: "GET",
      url: `/api/search/?category=${category}&query=${query}`,
    })
      .then((res) => {
        if (res.status === 200) {
          setIsLoading(false);
          setProductApiRes(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [toggleState]);
  return (
    <>
      <PageSpacing>
        <Box paddingLeft="2rem" marginTop="2rem">
          <BreadCrumb />
        </Box>
        {isMobile ? (
          <Box
            marginTop="2.4rem"
            padding="0 2rem"
            display="flex"
            justifyContent="center"
            alignItems="center">
            <MobileSearch />
          </Box>
        ) : (
          ""
        )}

        <Box paddingLeft="2rem" margin="3rem 0">
          <Typography
            color={
              theme === "light"
                ? lightColor.text.primary
                : darkColor.text.primary
            }
            fontSize={isMobile ? "1.8rem" : "2.8rem"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            letterSpacing="0.02rem"
            textTransform="capitalize">
            Search
          </Typography>
        </Box>

        {/* filter feature UI */}
        {/* <Box
          textAlign={isMobile ? "start" : "end"}
          gap="0.5rem"
          margin="1.5rem 0"
        >
          <Typography
            color={color.text.primary}
            fontSize={isMobile ? "1.6rem" : "2rem"}
            fontStyle="normal"
            fontWeight="700"
            lineHeight="normal"
            letterSpacing="0.02rem"
            paddingLeft="2rem"
          >
            Filter
          </Typography>
        </Box> */}

        <Grid
          justifyContent="center"
          padding="0 0.5rem"
          container
          spacing={isMobile ? 0.5 : 2}>
          {isLoading ? (
            [...Array(4)].map((data, index: number) => {
              return (
                <Grid
                  key={`${index}+ProductCardNewArrivalsSkeleton`}
                  item
                  xs={3}>
                  <ProductCardSkeleton />
                </Grid>
              );
            })
          ) : productApiRes.length === 0 ? (
            <Box width="100%" textAlign="center">
              <NoProduct isMobile={isMobile} />
            </Box>
          ) : (
            productApiRes.map((data) => {
              return (
                <Grid
                  key={data._id}
                  item
                  margin={isMobile ? "1rem 0" : "5rem 0rem"}
                  justifyItems="center">
                  <Card fullDetailCard={true} data={data} />
                </Grid>
              );
            })
          )}
        </Grid>
      </PageSpacing>
    </>
  );
};

export default Search;
