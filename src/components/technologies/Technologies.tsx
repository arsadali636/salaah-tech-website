"use client";
import { Box, Tab, Tabs } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'

import aws from "@/assets/technologies/cloudDevops/aws.svg";
import azure from "@/assets/technologies/cloudDevops/azure.svg";
import docker from "@/assets/technologies/cloudDevops/docker.svg";
import google from "@/assets/technologies/cloudDevops/google-cloud.svg";
import jenkins from "@/assets/technologies/cloudDevops/jenkins.svg";
import kubernetes from "@/assets/technologies/cloudDevops/kubernetes.svg";
import oracle from "@/assets/technologies/cloudDevops/oracle.svg";

import codelgniter from "@/assets/technologies/frameworks/codelgniter.svg";
import django from "@/assets/technologies/frameworks/django.svg";
import dotnet from "@/assets/technologies/frameworks/dotnet.svg";
import expressJS from "@/assets/technologies/frameworks/expressJS.svg";
import flask from "@/assets/technologies/frameworks/flask.svg";
import hibernate from "@/assets/technologies/frameworks/hibernate.svg";
import laravel from "@/assets/technologies/frameworks/laravel.svg";
import springBoot from "@/assets/technologies/frameworks/spring-boot.svg";
import springCloud from "@/assets/technologies/frameworks/spring-cloud.svg";

import html5 from "@/assets/technologies/frontend/html5.svg";
import css3 from "@/assets/technologies/frontend/css3.svg";
import bootstrap from "@/assets/technologies/frontend/bootstrap.svg";
import tailwindCss from "@/assets/technologies/frontend/tailwind-css.svg";
import javascript from "@/assets/technologies/frontend/javascript.svg";
import typescript from "@/assets/technologies/frontend/typescript.svg";
import react from "@/assets/technologies/frontend/react.svg";
import angular from "@/assets/technologies/frontend/angular.svg";
import vueJs from "@/assets/technologies/frontend/vue-js.svg";
import nextJs from "@/assets/technologies/frontend/next-js.svg";

import python from "@/assets/technologies/backend/python.svg";
import java from "@/assets/technologies/backend/java.svg";
import dotNet from "@/assets/technologies/backend/dot-net.svg";
import dotNetCore from "@/assets/technologies/backend/net-core.svg";
import node from "@/assets/technologies/backend/node.svg";
import php from "@/assets/technologies/backend/php.svg";

import android from "@/assets/technologies/mobile/android.svg";
import apple from "@/assets/technologies/mobile/apple.svg";
import flutter from "@/assets/technologies/mobile/flutter.svg";
import kotlin from "@/assets/technologies/mobile/kotlin.svg";
import reactNative from "@/assets/technologies/mobile/react.svg";
import swift from "@/assets/technologies/mobile/swift.svg";
import unity3d from "@/assets/technologies/mobile/unity-3d.svg";
import xamrain from "@/assets/technologies/mobile/xamrain.svg";

import dynamoDb from "@/assets/technologies/database/dynamo-db.svg";
import mariaDb from "@/assets/technologies/database/maria-db.svg";
import mongoDb from "@/assets/technologies/database/mongo-db.svg";
import mySql from "@/assets/technologies/database/my-sql.svg";
import postgreSql from "@/assets/technologies/database/postgre-sql.svg";
import firebase from "@/assets/technologies/database/firebase.png";

import wordpress from "@/assets/technologies/cms/wordpress.svg";
import woocommerce from "@/assets/technologies/cms/woocommerce.svg";
import shopify from "@/assets/technologies/cms/shopify.svg";
import strapi from "@/assets/technologies/cms/strapi.svg";

function Technologies() {
    const [value, setValue] = useState(0);

    const handleChange = (event: any, newValue: number) => {
        setValue(newValue);
    };

    const technologies = {
        cloudDevops: [
            { name: "aws", image: aws },
            { name: "azure", image: azure },
            { name: "docker", image: docker },
            { name: "google cloud", image: google },
            { name: "jenkins", image: jenkins },
            { name: "kubernetes", image: kubernetes },
            // { name: "oracle", image: oracle },
        ],
        frameworks: [
            { name: "codelgniter", image: codelgniter },
            { name: "django", image: django },
            // { name: ".Net Core", image: dotnet },
            // { name: ".Net MVC", image: dotnet },
            // { name: "NestJS", image: dotnet },
            { name: "expressJS", image: expressJS },
            { name: "flask", image: flask },
            // { name: "hibernate", image: hibernate },
            { name: "laravel", image: laravel },
            { name: "spring Boot", image: springBoot },
            // { name: "spring Cloud", image: springCloud },
        ],
        frontend: [
            { name: "html5", image: html5 },
            { name: "css3", image: css3 },
            { name: "bootstrap", image: bootstrap },
            { name: "tailwindCss", image: tailwindCss },
            { name: "javascript", image: javascript },
            { name: "typescript", image: typescript },
            { name: "space", image: typescript },
            { name: "react", image: react },
            { name: "angular", image: angular },
            { name: "vueJs", image: vueJs },
            { name: "nextJs", image: nextJs },
        ],
        backend: [
            { name: "python", image: python },
            { name: "java", image: java },
            { name: "nodeJS", image: node },
            { name: "php", image: php },
            { name: ".Net", image: dotNet },
            { name: ".Net Core", image: dotNetCore },
        ],
        mobile: [
            { name: "android", image: android },
            { name: "apple", image: apple },
            { name: "flutter", image: flutter },
            { name: "kotlin", image: kotlin },
            { name: "react native", image: reactNative },
            { name: "swift", image: swift },
            // { name: "unity 3d", image: unity3d },
            // { name: "xamrain", image: xamrain },
        ],
        database: [
            { name: "dynamo DB", image: dynamoDb },
            { name: "maria DB", image: mariaDb },
            { name: "mongo DB", image: mongoDb },
            { name: "my Sql", image: mySql },
            { name: "postgre Sql ", image: postgreSql },
            { name: "firebase", image: firebase },
        ],
        cms: [
            { name: "space", image: wordpress },
            { name: "wordpress", image: wordpress },
            { name: "woocommerce", image: woocommerce },
            { name: "shopify", image: shopify },
            { name: "strapi", image: strapi },
        ],
    };
    return (
        <div className="container mt-10 mb-20 flex flex-col gap-16">
            {/* section-title  */}
            <div className="text-center max-w-screen-md m-auto">
                {/* <h1 className="text-3xl font-bold mb-4 text-primary">Drive Innovation with a Cutting-Edge Technology Stack</h1> */}
                <h1 className="text-3xl font-bold mb-4 text-primary">Innovate with Advanced Technology</h1>
                <p className="text-lg leading-relaxed">
                    As a trusted software development partner, we leverage modern technologies and agile methodologies to deliver scalable and efficient solutions. Our commitment to innovation ensures that we craft custom software tailored to your unique business needs, empowering you to adapt swiftly to changing market demands.
                </p>
            </div>

            <div className="mx-auto mt-[-40px]">
                <Box
                    sx={{
                        maxWidth: { xs: 320, sm: 480, md: 760, lg: 1050 },
                        bgcolor: 'background.paper',
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="Cloud/DevOps" />
                        <Tab label="Frameworks" />
                        <Tab label="Front-End" />
                        <Tab label="Back-End" />
                        <Tab label="Mobile" />
                        <Tab label="Database" />
                        <Tab label="CMS/Ecommerce" />
                        {/* <Tab label="Quality Engineering" /> */}
                        {/* <Tab label="Tools" /> */}
                    </Tabs>
                </Box>
            </div>

            {value === 0 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.cloudDevops.map((item, index) => (
                        <div
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {value === 1 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.frameworks.map((item, index) => (
                        <div
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {value === 2 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.frontend.map((item, index) => (
                        <div
                            style={item.name === 'space' ? { opacity: '0' } : { opacity: 'unset' }}
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {value === 3 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.backend.map((item, index) => (
                        <div
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {value === 4 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.mobile.map((item, index) => (
                        <div
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {value === 5 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.database.map((item, index) => (
                        <div
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}


            {value === 6 && (
                <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-10 gap-5">
                    {technologies.cms.map((item, index) => (
                        <div
                            style={item.name === 'space' ? { opacity: '0' } : { opacity: 'unset' }}
                            key={index}
                            className="relative shadow-md border border-gray-100 bg-white flex items-center justify-center flex-col aspect-[3/2] rounded-xl overflow-hidden"
                        >
                            <Image
                                src={item.image}
                                className="object-contain"
                                width={0}
                                height={0}
                                alt={`${item.name} Image`}
                            />
                            <div className="bg-white font-bold text-primary h-9 flex justify-center items-center capitalize">
                                {item.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}


        </div>
    )
}

export default Technologies