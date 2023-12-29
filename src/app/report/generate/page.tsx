"use client"

import SplashScreen from "@report/app/components/SplashScreen";
import { useEffect, useState } from "react";


export default function GeneratePage() {

    const [loading, setLoading] = useState<boolean>(true);
    const [reports, setReports] = useState<[]>();

    useEffect(() => {

        // Load data reports
        setReports([]);

        setTimeout(() => {
            setLoading(false);
        }, 800)
        
    }, []);

    if(loading)
        return <SplashScreen />;

    return (
        <>
            <h1>Generate a new report day</h1>
        </>
    );
}