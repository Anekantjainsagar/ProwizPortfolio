"use client";
import Leftbar from "@/app/Components/Leftbar";
import Sidebar from "@/app/Components/Sidebar";
import React from "react";

const Reports = () => {
  const reportsData = [
    {
      title: "HubSpot Dashboard",
      logo: "/Logos/HubSpot.svg",
      text: "The HubSpot Dashboard provides a comprehensive overview of key business metrics, with dedicated pages for campaigns, deals, and team performance, enabling streamlined tracking and data-driven decision-making. Gain insights into your marketing efforts, sales pipeline, and team productivity all in one place.",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Hubspot/HubSpot Overview.png",
          text: "The Overview page summarizes overall performance metrics including leads, opportunities, and closed deals, along with key statistics such as number of campaigns run, visits, contacts, sessions, and bounce rate.",
        },
        {
          title: "Campaigns",
          images: "/Dashboards/Hubspot/Hubspot Campaigns.png",
          images: "/Dashboards/Hubspot/Hubspot Campaigns.png",
          text: "The Campaigns page highlights campaign performance with metrics like open rate, conversion rate, number of contacts, and detailed email conversion statistics, including delivered emails, clicks, and conversion activity heatmap.",
        },
        {
          title: "Deals",
          images: "/Dashboards/Hubspot/Hubspot Deals.png",
          text: "The Deals page presents detailed information on deal stages, amounts, and trends over time, including metrics such as number of open deals, projected amounts, and average deal age. It also lists top won and lost deals by amount and provides reasons for lost deals.",
        },
        {
          title: "Team Performance",
          images: "/Dashboards/Hubspot/Hubspot Team.png",
          text: "The Team Performance page evaluates the performance of individual team members based on number of deals, closed deals, closed amount, and close rate. It provides a comparative view of each team member's contributions and performance metrics.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/4d60d43c-21d5-4926-a38c-69ff99a79859/page/u101D",
      type: "E-Commerce + Marketing & Social Media",
    },
    {
      title: "Amazon Dashboard",
      logo: "/Logos/Amazon Selling Partner.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Amazon/Amazon Overview.png",
          text: "The Overview page presents a summary of overall performance metrics including total revenue, average order size, average order value, number of SKUs, and average rating for different marketplaces",
        },
        {
          title: "Orders",
          images: "/Dashboards/Amazon/Amazon Orders.png",
          text: "The Orders page details order fulfillment metrics, including the number of orders fulfilled, average order value, shipping fees, and the status of orders by shipping priority. It includes data on gross revenue, returns, shipping tax fees, and a summary of orders by date, order ID, status, and market place.",
        },
        {
          title: "Inventory",
          images: "/Dashboards/Amazon/Amazon Inventory.png",
          text: "The Inventory page tracks the inventory status across different marketplaces, providing insights into SKU performance, inventory age, number of SKUs in transit, value of SKUs, damaged SKUs, and a summary of top and bottom-selling products.",
        },
        {
          title: "Feedback",
          images: "/Dashboards/Amazon/Amazon Feedback.png",
          text: "The Feedback page compiles customer reviews and ratings for various products, showing the number of positive, neutral, and negative reviews. It includes detailed comments from customers and tracks the trend of reviews over the year, helping to identify areas of improvement and customer satisfaction.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/ca68ae97-0343-475b-8f02-a4c3e9d8490b/page/u101D",
      text: "The Amazon Dashboard offers a centralized view of your business, featuring pages for orders, inventory, and customer feedback, ensuring efficient management and insightful analytics. Monitor sales trends, track stock levels, and analyze customer reviews",
      type: "E-Commerce",
    },
    {
      title: "YouTube Dashboard",
      logo: "/Logos/YouTube.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Youtube/YouTube Overview.png",
          text: "The Overview page summarizes channel performance metrics including total views, average watch time, total subscribers, and engagement metrics like likes, dislikes, and comments. It highlights top-performing videos and overall engagement trends.",
        },
        {
          title: "KPI Trends",
          images: "/Dashboards/Youtube/Youtube KPI Trends.png",
          text: "The KPI Trends page displays trends in key performance indicators over time, such as views, watch time, and subscriber growth. It provides a detailed view of how these metrics have changed month over month and identifies peak periods of activity.",
        },
        {
          title: "Subscription Status",
          images: "/Dashboards/Youtube/Youtube Subscription Status.png",
          text: "The Subscription Status page compares engagement metrics between subscribers and non-subscribers. It shows the distribution of views, likes, comments, and shares between these two groups, along with top-performing videos for each segment.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/7842f608-96cb-4932-bf91-2bb892af53a9/page/u101D",
      text: "The YouTube Dashboard delivers a clear snapshot of your channel's performance, with pages for KPI trends and subscription status, enabling informed content strategy decisions. Track key metrics, monitor viewer engagement, and stay updated on subscriber growth effortlessly.",
      type: "Marketing & Social Media",
    },
    {
      title: "Google Search Console Dashboard",
      logo: "/Logos/Google Ads.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Google/GSC-Overview.png",
          text: "The Overview page summarizes the website's performance trends including total clicks, impressions, average position, and CTR. It also provides a geographical breakdown of clicks and impressions. It also highlights the device category breakdown for the audience.",
        },
        {
          title: "Keywords",
          images: "/Dashboards/Google/GSC-Keywords.png",
          text: "The Keywords page tracks the performance of specific keywords, showing metrics like impressions, clicks, and average position for both brand and generic keywords. It includes a comparison of keyword rankings over the last 30 days and identifies both improved and declined keywords.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/449d8f7e-bb5c-4d75-9481-85681edbf6bd/page/u101D",
      text: "The Google Search Console Dashboard provides a detailed overview and keywords page, helping you monitor site performance and optimize for search visibility. Analyze search queries, track keyword rankings, and enhance your SEO strategy with ease.",
      type: "Marketing & Social Media",
    },
    {
      title: "Google Analytics Dashboard",
      logo: "/Logos/Google Ads.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Google Analytics/Overview.png",
          text: "The Overview page summarizes the website's overall performance metrics, including total users, new users, sessions, conversions, average session duration, and conversion rate. It highlights the most popular landing pages and the device category breakdown for the audience.",
        },
        {
          title: "Audience Overview",
          images: "/Dashboards/Google Analytics/Audience Overview.png",
          text: "The Audience Overview page provides detailed insights into user demographics and behavior. It also breaks down traffic by channel groups, showing the performance of different acquisition channels like direct, organic social, email, affiliates, unassigned, and paid search.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/f13e3631-c157-457c-aa96-8159edbfb4bd/page/X4f1D",
      text: "The Google Analytics Dashboard offers a comprehensive view of your site's performance, featuring an overview and audience overview page. Gain valuable insights into user behavior, demographics, and engagement to drive data-informed decisions and optimize your digital strategy.",
      type: "Marketing & Social Media",
    },
    {
      title: "Google Ads Dashboard",
      logo: "/Logos/Google Ads.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Google Ads/Google Ads Overview.png",
          text: "The Overview page summarizes overall campaign performance metrics including impressions, clicks, conversions, and amount spent. It also provides a geographical breakdown of impressions, clicks, and conversions across key regions. KPIs include CTR, CPC, and conversion rate.",
        },
        {
          title: "Orders",
          images: "/Dashboards/Google Ads/Google Ads Campaign.png",
          text: "The Campaigns page tracks the performance of individual campaigns, showing metrics like impressions, clicks, and conversions for each campaign. It includes an overview of active and inactive campaigns, trends over the year, and a detailed tabular summary of campaign and keyword performance.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/e6cc7715-b234-4c1b-8d11-04595cf8c29d/page/u101D",
      text: "The Google Ads Dashboard provides a comprehensive overview and campaigns page, enabling you to track ad performance and manage campaigns effectively. Monitor key metrics, optimize ad spend, and drive better results with data-driven insights.",
      type: "Marketing & Social Media",
    },
    {
      title: "Facebook Ads Dashboard",
      logo: "/Logos/Facebook Ads.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Facebook/Facebook Ads - Overview.png",
          text: "The Overview page summarizes overall ad performance metrics, including impressions, clicks, conversions, and amount spent. It provides a geographical breakdown of impressions, clicks, and conversions across key regions. Key performance indicators include CPM, CTR, CPC, and conversion rate.",
        },
        {
          title: "Campaigns",
          images: "/Dashboards/Facebook/Facebook Ads Campaigns.png",
          text: "The Campaigns page tracks the performance of individual campaigns, showing metrics like impressions, clicks, and conversions for each campaign. It includes trends over the year, a detailed tabular summary of campaign performance, and highlights the top-performing campaigns. ",
        },
        {
          title: "Ads",
          images: "/Dashboards/Facebook/Facebook Ads - Ads.png",
          text: "The Ads page provides insights into the performance of individual ads, including metrics such as impressions, clicks, amount spent, and conversions. It highlights the top-performing creatives and provides a comparative analysis of ad performance across different platforms like Facebook, Instagram, and Messenger.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/34dd63b9-3857-4973-aa81-34cda1b4b5d2/page/u101D",
      text: "The Facebook Ads Dashboard offers a comprehensive view with dedicated pages for overview, campaigns, and ads, enabling effective ad management and performance tracking. Analyze key metrics, optimize campaigns, and refine ad strategies with actionable insights.",
      type: "Marketing & Social Media",
    },
    {
      title: "Facebook Insights Dashboard",
      logo: "/Logos/Facebook Ads.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Facebook Insights/Overview.png",
          text: "The Overview page summarizes overall performance metrics, including page views, number of followers, and engagement rates for different regions. Key metrics include device performance and platform-specific data on posts and reels.",
        },
        {
          title: "Content",
          images: "/Dashboards/Facebook Insights/Content.png",
          text: "The Campaigns page provides detailed insights into the performance of individual campaigns. It includes metrics such as impressions, reach, and engagement for both organic and inorganic impressions.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/017d3f6e-bc6b-438f-9ad0-0c07875aeae2/page/u101D",
      text: "The Facebook Insights Dashboard provides a detailed overview and content page, allowing you to track page performance and content effectiveness. Gain valuable insights into audience engagement and optimize your content strategy for better results.",
      type: "Marketing & Social Media",
    },
    {
      title: "Shopify Dashboard",
      logo: "/Logos/Shopify.svg",
      headings: [
        {
          title: "Overview",
          images: "/Dashboards/Shopify/Overview.png",
          text: "The Overview page summarizes gross and net revenue, return rates, average order value, and order size. It also highlights top-selling products by volume and revenue, as well as the split of order statuses and geographical distribution of sales.",
        },
        {
          title: "Revenue",
          images: "/Dashboards/Shopify/Revenue.png",
          text: "The Revenue page provides a detailed analysis of sales trends over time, including gross and net sales. It includes metrics such as order size, location-wise sales, and a cohort analysis for revenue retention.",
        },
        {
          title: "Orders",
          images: "/Dashboards/Shopify/Orders.png",
          text: "The Orders page tracks the total number of orders, including fulfilled, in-transit, and returned orders. It shows average order size and provides a tabular summary of orders by location, highlighting key metrics like gross sales and fulfillment times.",
        },
        {
          title: "Products",
          images: "/Dashboards/Shopify/Products.png",
          text: "The Products page details product performance metrics, including the number of SKUs, average return rates, and top-selling products by gross sales. It also shows the geographical distribution of product sales and a summary of active, inactive, and draft SKUs.",
        },
        {
          title: "Customers",
          images: "/Dashboards/Shopify/Customers.png",
          text: "The Customers page provides insights into customer behavior, tracking metrics such as total visitors, conversion rate, returning customer rate, and average revenue per customer. It includes a cohort analysis for customer retention and a location-wise breakdown of customer data.",
        },
      ],
      link: "https://lookerstudio.google.com/embed/reporting/6f08e475-196d-4847-b556-72071ed57835/page/p_fquzhxohhd",
      text: "The Shopify Dashboard provides a holistic view with pages for overview, revenue, orders, products, and customers, streamlining e-commerce management. Monitor sales performance, track inventory, and gain insights into customer behavior to enhance your online store's effectiveness.",
      type: "E-Commerce",
    },
  ];

  return (
    <div className="flex bg-darkPurple">
      <Leftbar />
      <div className="w-[84%]">
        <Sidebar />
        <div className="grid grid-cols-4 gap-y-10 gap-6 p-6 overflow-y-auto h-[90vh]">
          {reportsData.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  window.open(item?.link, "__blank");
                }}
                className="flex flex-row w-full justify-center items-center cursor-pointer"
              >
                <div className="border border-gray-300/20 rounded-[15px] flex flex-col text-white gap-1 bg-gray-700/10">
                  <img
                    className="h-[40vh] object-cover object-top rounded-[25px] w-[100vw] lg:w-[50vw] md:w-[23vw] p-3"
                    src={item?.headings[0].images}
                    alt="Image"
                  />
                  <div className="flex justify-center pb-4 items-center">
                    {item?.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>{" "}
      </div>
    </div>
  );
};

export default Reports;
