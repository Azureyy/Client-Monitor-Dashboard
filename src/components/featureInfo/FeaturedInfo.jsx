import './featuredInfo.css'
import {TrendingDownRounded} from '@mui/icons-material';
import {TrendingUpRounded} from '@mui/icons-material';

export default function FeaturedInfo() {
  return (
    <div className="featured">
        <div className= "featuredItemTotal">
            <span className="featuredTitle"> Total Clients</span>
            <div className= "featureClientContainer">
                <span className="featuredClient">108</span>
                <span className="featuredClientRate">
                    3.2% <TrendingUpRounded />
                </span>
            </div>
        </div>
        <div className= "featuredItemScore">
            <span className="featuredTitle"> Net Promoter Score</span>
            <div className= "featureClientContainer">
                <span className="featuredClient">+43</span>
                <span className="featuredScoreRate">
                    1.5% <TrendingDownRounded className="featuredIcon"/>
                </span>
            </div>
        </div>
        <div className= "featuredItemRetention">
            <span className="featuredTitle"> Client Retention</span>
            <div className= "featureClientContainer">
                <span className="featuredClient">95%</span>
                <span className="featuredRetentionRate">
                    3.2% <TrendingUpRounded className="featuredIcon negative"/>
                </span>
            </div>
        </div>
    </div>
  )
}
