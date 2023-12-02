"use strict";var r=require('@stdlib/utils-define-read-only-property/dist'),e={};r(e,"cumax",require('@stdlib/stats-base-cumax/dist'));r(e,"cumaxabs",require('@stdlib/stats-base-cumaxabs/dist'));r(e,"cumin",require('@stdlib/stats-base-cumin/dist'));r(e,"cuminabs",require('@stdlib/stats-base-cuminabs/dist'));r(e,"dcumax",require('@stdlib/stats-base-dcumax/dist'));r(e,"dcumaxabs",require('@stdlib/stats-base-dcumaxabs/dist'));r(e,"dcumin",require('@stdlib/stats-base-dcumin/dist'));r(e,"dcuminabs",require('@stdlib/stats-base-dcuminabs/dist'));r(e,"dists",require('@stdlib/stats-base-dists/dist'));r(e,"dmax",require('@stdlib/stats-base-dmax/dist'));r(e,"dmaxabs",require('@stdlib/stats-base-dmaxabs/dist'));r(e,"dmaxabssorted",require('@stdlib/stats-base-dmaxabssorted/dist'));r(e,"dmaxsorted",require('@stdlib/stats-base-dmaxsorted/dist'));r(e,"dmean",require('@stdlib/stats-base-dmean/dist'));r(e,"dmeankbn",require('@stdlib/stats-base-dmeankbn/dist'));r(e,"dmeankbn2",require('@stdlib/stats-base-dmeankbn2/dist'));r(e,"dmeanli",require('@stdlib/stats-base-dmeanli/dist'));r(e,"dmeanlipw",require('@stdlib/stats-base-dmeanlipw/dist'));r(e,"dmeanors",require('@stdlib/stats-base-dmeanors/dist'));r(e,"dmeanpn",require('@stdlib/stats-base-dmeanpn/dist'));r(e,"dmeanpw",require('@stdlib/stats-base-dmeanpw/dist'));r(e,"dmeanstdev",require('@stdlib/stats-base-dmeanstdev/dist'));r(e,"dmeanstdevpn",require('@stdlib/stats-base-dmeanstdevpn/dist'));r(e,"dmeanvar",require('@stdlib/stats-base-dmeanvar/dist'));r(e,"dmeanvarpn",require('@stdlib/stats-base-dmeanvarpn/dist'));r(e,"dmeanwd",require('@stdlib/stats-base-dmeanwd/dist'));r(e,"dmediansorted",require('@stdlib/stats-base-dmediansorted/dist'));r(e,"dmidrange",require('@stdlib/stats-base-dmidrange/dist'));r(e,"dmin",require('@stdlib/stats-base-dmin/dist'));r(e,"dminabs",require('@stdlib/stats-base-dminabs/dist'));r(e,"dminsorted",require('@stdlib/stats-base-dminsorted/dist'));r(e,"dmskmax",require('@stdlib/stats-base-dmskmax/dist'));r(e,"dmskmin",require('@stdlib/stats-base-dmskmin/dist'));r(e,"dmskrange",require('@stdlib/stats-base-dmskrange/dist'));r(e,"dnanmax",require('@stdlib/stats-base-dnanmax/dist'));r(e,"dnanmaxabs",require('@stdlib/stats-base-dnanmaxabs/dist'));r(e,"dnanmean",require('@stdlib/stats-base-dnanmean/dist'));r(e,"dnanmeanors",require('@stdlib/stats-base-dnanmeanors/dist'));r(e,"dnanmeanpn",require('@stdlib/stats-base-dnanmeanpn/dist'));r(e,"dnanmeanpw",require('@stdlib/stats-base-dnanmeanpw/dist'));r(e,"dnanmeanwd",require('@stdlib/stats-base-dnanmeanwd/dist'));r(e,"dnanmin",require('@stdlib/stats-base-dnanmin/dist'));r(e,"dnanminabs",require('@stdlib/stats-base-dnanminabs/dist'));r(e,"dnanmskmax",require('@stdlib/stats-base-dnanmskmax/dist'));r(e,"dnanmskmin",require('@stdlib/stats-base-dnanmskmin/dist'));r(e,"dnanmskrange",require('@stdlib/stats-base-dnanmskrange/dist'));r(e,"dnanrange",require('@stdlib/stats-base-dnanrange/dist'));r(e,"dnanstdev",require('@stdlib/stats-base-dnanstdev/dist'));r(e,"dnanstdevch",require('@stdlib/stats-base-dnanstdevch/dist'));r(e,"dnanstdevpn",require('@stdlib/stats-base-dnanstdevpn/dist'));r(e,"dnanstdevtk",require('@stdlib/stats-base-dnanstdevtk/dist'));r(e,"dnanstdevwd",require('@stdlib/stats-base-dnanstdevwd/dist'));r(e,"dnanstdevyc",require('@stdlib/stats-base-dnanstdevyc/dist'));r(e,"dnanvariance",require('@stdlib/stats-base-dnanvariance/dist'));r(e,"dnanvariancech",require('@stdlib/stats-base-dnanvariancech/dist'));r(e,"dnanvariancepn",require('@stdlib/stats-base-dnanvariancepn/dist'));r(e,"dnanvariancetk",require('@stdlib/stats-base-dnanvariancetk/dist'));r(e,"dnanvariancewd",require('@stdlib/stats-base-dnanvariancewd/dist'));r(e,"dnanvarianceyc",require('@stdlib/stats-base-dnanvarianceyc/dist'));r(e,"drange",require('@stdlib/stats-base-drange/dist'));r(e,"dsem",require('@stdlib/stats-base-dsem/dist'));r(e,"dsemch",require('@stdlib/stats-base-dsemch/dist'));r(e,"dsempn",require('@stdlib/stats-base-dsempn/dist'));r(e,"dsemtk",require('@stdlib/stats-base-dsemtk/dist'));r(e,"dsemwd",require('@stdlib/stats-base-dsemwd/dist'));r(e,"dsemyc",require('@stdlib/stats-base-dsemyc/dist'));r(e,"dsmean",require('@stdlib/stats-base-dsmean/dist'));r(e,"dsmeanors",require('@stdlib/stats-base-dsmeanors/dist'));r(e,"dsmeanpn",require('@stdlib/stats-base-dsmeanpn/dist'));r(e,"dsmeanpw",require('@stdlib/stats-base-dsmeanpw/dist'));r(e,"dsmeanwd",require('@stdlib/stats-base-dsmeanwd/dist'));r(e,"dsnanmean",require('@stdlib/stats-base-dsnanmean/dist'));r(e,"dsnanmeanors",require('@stdlib/stats-base-dsnanmeanors/dist'));r(e,"dsnanmeanpn",require('@stdlib/stats-base-dsnanmeanpn/dist'));r(e,"dsnanmeanwd",require('@stdlib/stats-base-dsnanmeanwd/dist'));r(e,"dstdev",require('@stdlib/stats-base-dstdev/dist'));r(e,"dstdevch",require('@stdlib/stats-base-dstdevch/dist'));r(e,"dstdevpn",require('@stdlib/stats-base-dstdevpn/dist'));r(e,"dstdevtk",require('@stdlib/stats-base-dstdevtk/dist'));r(e,"dstdevwd",require('@stdlib/stats-base-dstdevwd/dist'));r(e,"dstdevyc",require('@stdlib/stats-base-dstdevyc/dist'));r(e,"dsvariance",require('@stdlib/stats-base-dsvariance/dist'));r(e,"dsvariancepn",require('@stdlib/stats-base-dsvariancepn/dist'));r(e,"dvariance",require('@stdlib/stats-base-dvariance/dist'));r(e,"dvariancech",require('@stdlib/stats-base-dvariancech/dist'));r(e,"dvariancepn",require('@stdlib/stats-base-dvariancepn/dist'));r(e,"dvariancetk",require('@stdlib/stats-base-dvariancetk/dist'));r(e,"dvariancewd",require('@stdlib/stats-base-dvariancewd/dist'));r(e,"dvarianceyc",require('@stdlib/stats-base-dvarianceyc/dist'));r(e,"dvarm",require('@stdlib/stats-base-dvarm/dist'));r(e,"dvarmpn",require('@stdlib/stats-base-dvarmpn/dist'));r(e,"dvarmtk",require('@stdlib/stats-base-dvarmtk/dist'));r(e,"max",require('@stdlib/stats-base-max/dist'));r(e,"maxBy",require('@stdlib/stats-base-max-by/dist'));r(e,"maxabs",require('@stdlib/stats-base-maxabs/dist'));r(e,"maxsorted",require('@stdlib/stats-base-maxsorted/dist'));r(e,"mean",require('@stdlib/stats-base-mean/dist'));r(e,"meankbn",require('@stdlib/stats-base-meankbn/dist'));r(e,"meankbn2",require('@stdlib/stats-base-meankbn2/dist'));r(e,"meanors",require('@stdlib/stats-base-meanors/dist'));r(e,"meanpn",require('@stdlib/stats-base-meanpn/dist'));r(e,"meanpw",require('@stdlib/stats-base-meanpw/dist'));r(e,"meanwd",require('@stdlib/stats-base-meanwd/dist'));r(e,"mediansorted",require('@stdlib/stats-base-mediansorted/dist'));r(e,"min",require('@stdlib/stats-base-min/dist'));r(e,"minBy",require('@stdlib/stats-base-min-by/dist'));r(e,"minabs",require('@stdlib/stats-base-minabs/dist'));r(e,"minsorted",require('@stdlib/stats-base-minsorted/dist'));r(e,"mskmax",require('@stdlib/stats-base-mskmax/dist'));r(e,"mskmin",require('@stdlib/stats-base-mskmin/dist'));r(e,"mskrange",require('@stdlib/stats-base-mskrange/dist'));r(e,"nanmax",require('@stdlib/stats-base-nanmax/dist'));r(e,"nanmaxBy",require('@stdlib/stats-base-nanmax-by/dist'));r(e,"nanmaxabs",require('@stdlib/stats-base-nanmaxabs/dist'));r(e,"nanmean",require('@stdlib/stats-base-nanmean/dist'));r(e,"nanmeanors",require('@stdlib/stats-base-nanmeanors/dist'));r(e,"nanmeanpn",require('@stdlib/stats-base-nanmeanpn/dist'));r(e,"nanmeanwd",require('@stdlib/stats-base-nanmeanwd/dist'));r(e,"nanmin",require('@stdlib/stats-base-nanmin/dist'));r(e,"nanminBy",require('@stdlib/stats-base-nanmin-by/dist'));r(e,"nanminabs",require('@stdlib/stats-base-nanminabs/dist'));r(e,"nanmskmax",require('@stdlib/stats-base-nanmskmax/dist'));r(e,"nanmskmin",require('@stdlib/stats-base-nanmskmin/dist'));r(e,"nanmskrange",require('@stdlib/stats-base-nanmskrange/dist'));r(e,"nanrange",require('@stdlib/stats-base-nanrange/dist'));r(e,"nanrangeBy",require('@stdlib/stats-base-nanrange-by/dist'));r(e,"nanstdev",require('@stdlib/stats-base-nanstdev/dist'));r(e,"nanstdevch",require('@stdlib/stats-base-nanstdevch/dist'));r(e,"nanstdevpn",require('@stdlib/stats-base-nanstdevpn/dist'));r(e,"nanstdevtk",require('@stdlib/stats-base-nanstdevtk/dist'));r(e,"nanstdevwd",require('@stdlib/stats-base-nanstdevwd/dist'));r(e,"nanstdevyc",require('@stdlib/stats-base-nanstdevyc/dist'));r(e,"nanvariance",require('@stdlib/stats-base-nanvariance/dist'));r(e,"nanvariancech",require('@stdlib/stats-base-nanvariancech/dist'));r(e,"nanvariancepn",require('@stdlib/stats-base-nanvariancepn/dist'));r(e,"nanvariancetk",require('@stdlib/stats-base-nanvariancetk/dist'));r(e,"nanvariancewd",require('@stdlib/stats-base-nanvariancewd/dist'));r(e,"nanvarianceyc",require('@stdlib/stats-base-nanvarianceyc/dist'));r(e,"range",require('@stdlib/stats-base-range/dist'));r(e,"rangeBy",require('@stdlib/stats-base-range-by/dist'));r(e,"scumax",require('@stdlib/stats-base-scumax/dist'));r(e,"scumaxabs",require('@stdlib/stats-base-scumaxabs/dist'));r(e,"scumin",require('@stdlib/stats-base-scumin/dist'));r(e,"scuminabs",require('@stdlib/stats-base-scuminabs/dist'));r(e,"sdsmean",require('@stdlib/stats-base-sdsmean/dist'));r(e,"sdsmeanors",require('@stdlib/stats-base-sdsmeanors/dist'));r(e,"sdsnanmean",require('@stdlib/stats-base-sdsnanmean/dist'));r(e,"sdsnanmeanors",require('@stdlib/stats-base-sdsnanmeanors/dist'));r(e,"smax",require('@stdlib/stats-base-smax/dist'));r(e,"smaxabs",require('@stdlib/stats-base-smaxabs/dist'));r(e,"smaxabssorted",require('@stdlib/stats-base-smaxabssorted/dist'));r(e,"smaxsorted",require('@stdlib/stats-base-smaxsorted/dist'));r(e,"smean",require('@stdlib/stats-base-smean/dist'));r(e,"smeankbn",require('@stdlib/stats-base-smeankbn/dist'));r(e,"smeankbn2",require('@stdlib/stats-base-smeankbn2/dist'));r(e,"smeanli",require('@stdlib/stats-base-smeanli/dist'));r(e,"smeanlipw",require('@stdlib/stats-base-smeanlipw/dist'));r(e,"smeanors",require('@stdlib/stats-base-smeanors/dist'));r(e,"smeanpn",require('@stdlib/stats-base-smeanpn/dist'));r(e,"smeanpw",require('@stdlib/stats-base-smeanpw/dist'));r(e,"smeanwd",require('@stdlib/stats-base-smeanwd/dist'));r(e,"smediansorted",require('@stdlib/stats-base-smediansorted/dist'));r(e,"smidrange",require('@stdlib/stats-base-smidrange/dist'));r(e,"smin",require('@stdlib/stats-base-smin/dist'));r(e,"sminabs",require('@stdlib/stats-base-sminabs/dist'));r(e,"sminsorted",require('@stdlib/stats-base-sminsorted/dist'));r(e,"smskmax",require('@stdlib/stats-base-smskmax/dist'));r(e,"smskmin",require('@stdlib/stats-base-smskmin/dist'));r(e,"smskrange",require('@stdlib/stats-base-smskrange/dist'));r(e,"snanmax",require('@stdlib/stats-base-snanmax/dist'));r(e,"snanmaxabs",require('@stdlib/stats-base-snanmaxabs/dist'));r(e,"snanmean",require('@stdlib/stats-base-snanmean/dist'));r(e,"snanmeanors",require('@stdlib/stats-base-snanmeanors/dist'));r(e,"snanmeanpn",require('@stdlib/stats-base-snanmeanpn/dist'));r(e,"snanmeanwd",require('@stdlib/stats-base-snanmeanwd/dist'));r(e,"snanmin",require('@stdlib/stats-base-snanmin/dist'));r(e,"snanminabs",require('@stdlib/stats-base-snanminabs/dist'));r(e,"snanmskmax",require('@stdlib/stats-base-snanmskmax/dist'));r(e,"snanmskmin",require('@stdlib/stats-base-snanmskmin/dist'));r(e,"snanmskrange",require('@stdlib/stats-base-snanmskrange/dist'));r(e,"snanrange",require('@stdlib/stats-base-snanrange/dist'));r(e,"snanstdev",require('@stdlib/stats-base-snanstdev/dist'));r(e,"snanstdevch",require('@stdlib/stats-base-snanstdevch/dist'));r(e,"snanstdevpn",require('@stdlib/stats-base-snanstdevpn/dist'));r(e,"snanstdevtk",require('@stdlib/stats-base-snanstdevtk/dist'));r(e,"snanstdevwd",require('@stdlib/stats-base-snanstdevwd/dist'));r(e,"snanstdevyc",require('@stdlib/stats-base-snanstdevyc/dist'));r(e,"snanvariance",require('@stdlib/stats-base-snanvariance/dist'));r(e,"snanvariancech",require('@stdlib/stats-base-snanvariancech/dist'));r(e,"snanvariancepn",require('@stdlib/stats-base-snanvariancepn/dist'));r(e,"snanvariancetk",require('@stdlib/stats-base-snanvariancetk/dist'));r(e,"snanvariancewd",require('@stdlib/stats-base-snanvariancewd/dist'));r(e,"snanvarianceyc",require('@stdlib/stats-base-snanvarianceyc/dist'));r(e,"srange",require('@stdlib/stats-base-srange/dist'));r(e,"sstdev",require('@stdlib/stats-base-sstdev/dist'));r(e,"sstdevch",require('@stdlib/stats-base-sstdevch/dist'));r(e,"sstdevpn",require('@stdlib/stats-base-sstdevpn/dist'));r(e,"sstdevtk",require('@stdlib/stats-base-sstdevtk/dist'));r(e,"sstdevwd",require('@stdlib/stats-base-sstdevwd/dist'));r(e,"sstdevyc",require('@stdlib/stats-base-sstdevyc/dist'));r(e,"stdev",require('@stdlib/stats-base-stdev/dist'));r(e,"stdevch",require('@stdlib/stats-base-stdevch/dist'));r(e,"stdevpn",require('@stdlib/stats-base-stdevpn/dist'));r(e,"stdevtk",require('@stdlib/stats-base-stdevtk/dist'));r(e,"stdevwd",require('@stdlib/stats-base-stdevwd/dist'));r(e,"stdevyc",require('@stdlib/stats-base-stdevyc/dist'));r(e,"svariance",require('@stdlib/stats-base-svariance/dist'));r(e,"svariancech",require('@stdlib/stats-base-svariancech/dist'));r(e,"svariancepn",require('@stdlib/stats-base-svariancepn/dist'));r(e,"svariancetk",require('@stdlib/stats-base-svariancetk/dist'));r(e,"svariancewd",require('@stdlib/stats-base-svariancewd/dist'));r(e,"svarianceyc",require('@stdlib/stats-base-svarianceyc/dist'));r(e,"variance",require('@stdlib/stats-base-variance/dist'));r(e,"variancech",require('@stdlib/stats-base-variancech/dist'));r(e,"variancepn",require('@stdlib/stats-base-variancepn/dist'));r(e,"variancetk",require('@stdlib/stats-base-variancetk/dist'));r(e,"variancewd",require('@stdlib/stats-base-variancewd/dist'));r(e,"varianceyc",require('@stdlib/stats-base-varianceyc/dist'));module.exports=e;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
