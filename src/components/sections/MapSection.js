import React from "react";
import "./MapSection.css";

export default function MapSection({
    isSmallScreen,
    isMediumScreen,
    isLargeScreen,
}) {
    return (
        <section id="where" className="section">
            <div className="section-five__wrapper">
                <span className="section__title section__title--black">
                    Vieni a Trovarci
                </span>
                <div
                    className="mapouter"
                    style={{
                        width: isSmallScreen
                            ? "300px"
                            : isMediumScreen
                            ? "450px"
                            : isLargeScreen
                            ? "725px"
                            : "1000px",
                        height:
                            isSmallScreen || isMediumScreen
                                ? "300px"
                                : isLargeScreen
                                ? "350px"
                                : "400px",
                    }}
                >
                    <div
                        className="gmap_canvas"
                        style={{
                            width: isSmallScreen
                                ? "300px"
                                : isMediumScreen
                                ? "450px"
                                : isLargeScreen
                                ? "725px"
                                : "1000px",
                            height:
                                isSmallScreen || isMediumScreen
                                    ? "300px"
                                    : isLargeScreen
                                    ? "350px"
                                    : "400px",
                        }}
                    >
                        <iframe
                            title="map"
                            width={
                                isSmallScreen
                                    ? "300"
                                    : isMediumScreen
                                    ? "450"
                                    : isLargeScreen
                                    ? "725"
                                    : "1000"
                            }
                            height={
                                isSmallScreen || isMediumScreen
                                    ? "300"
                                    : isLargeScreen
                                    ? "350"
                                    : "400"
                            }
                            className="map-iframe"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Lucera,%20via%20Napoli,%2016/A,%20Speedservice&t=&z=18&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                        />
                    </div>
                </div>
                <div className="section-five__from">
                    <span
                        style={{
                            color: "var(--primary-clr)",
                            fontSize: "2rem",
                            fontWeight: "700",
                            marginInline: "16px",
                            marginBottom: "24px",
                            display: "block",
                            textAlign: "center",
                        }}
                    >
                        Scopri come da:
                    </span>
                    <div className="section-five__cities">
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Alberona,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.4697886,15.1589883,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339f97ef6f727a7:0x3adc07b7b3d696ee!2m2!1d15.1242439!2d41.432188!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Alberona
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Biccari,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.4534624,15.1942763,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339fabe2b6051c1:0xbf075c0bff37798d!2m2!1d15.1980786!2d41.3984747!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Biccari
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Bovino,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.3781721,15.2739583,11z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339eba3cb46101d:0x4a8bb6985545f6ee!2m2!1d15.3395299!2d41.2484542!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Bovino
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Castelluccio+Valmaggiore,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.4251153,15.2290656,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339f034f84e7301:0xf6aa631c43c71c38!2m2!1d15.2011711!2d41.3421455!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Castelluccio V.re
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Motta+Montecorvino,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.5018208,15.1550149,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339fe87e0fef6e9:0x3a616c6172588a2a!2m2!1d15.1160306!2d41.5077553!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Motta M.no
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Pietramontecorvino,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.5241716,15.1628018,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339fdfe5f43470f:0x57236819b6ff91a8!2m2!1d15.1316634!2d41.5432306!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Pietra M.no
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Roseto+Valfortore,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.4361774,15.1453661,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339f71368055e81:0x4a8d3c92a2e632ad!2m2!1d15.0969144!2d41.3742954!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Roseto V.re
                        </a>
                        <a
                            className="section-five__city"
                            href="https://www.google.com/maps/dir/Volturino,+FG/Speedservice+Lucera,+Via+Napoli,+Lucera,+FG/@41.4932376,15.1552794,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x1339fea873f8924b:0x865402a835da203f!2m2!1d15.1233932!2d41.4775815!1m5!1m1!1s0x1339e1e8ae52f549:0xfb70e0ee17594a01!2m2!1d15.3311763!2d41.5082426!3e0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Volturino
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
