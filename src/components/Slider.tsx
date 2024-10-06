"use client";
import React, { Children, ReactNode } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import "swiper/css";

type Props = {
	children: ReactNode;
	swiperClassName?: string;
	swipperSliderClassName?: string;
};

function Slider({ children, swiperClassName, swipperSliderClassName }: Props) {
	return (
		<Swiper
			loop={true}
			centeredSlides={true}
			slidesPerView="auto"
			modules={[Navigation, A11y]}
			className={swiperClassName}
		>
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
			{Children.toArray(children).map((item: any) => {
				return (
					<SwiperSlide
						className={swipperSliderClassName}
						key={item.key}
					>
						{item}
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
}

export default Slider;
