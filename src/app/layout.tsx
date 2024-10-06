import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/assets/css/index.css";

export const metadata: Metadata = {
	title: "Samawa",
	description: "Wedding Website",
};

export default function RootLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				{children}
				{modal}
			</body>
		</html>
	);
}
