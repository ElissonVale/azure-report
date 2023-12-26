import SplashScreen from "@report/components/SplashScreen";
import { useEffect, useState } from "react";

const ReportManager = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [reports, setReports] = useState<[]>();

    useEffect(() => {

        // Load data reports
        setReports([]);

        setLoading(false);

    }, []);

    if(loading)
        return <SplashScreen />;

    return (
        <>
        
        </>
    );
}

export default ReportManager;