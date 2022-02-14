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
                     <TrendingUpRounded sx = {{color: "#037E09" }}/> 
                     <span className="rate">3.2%</span>
                </span>
            </div>
        </div>
        <div className= "featuredItemScore">
            <span className="featuredTitle"> Net Promoter Score</span>
            <div className= "featureClientContainer">
                <span className="featuredClient">+43</span>
                <span className="featuredScoreRate">
                    <TrendingDownRounded sx = {{color: "#B2322A" }}/>
                    <span className="rateNegative">1.5%</span>
                </span>
            </div>
        </div>
        <div className= "featuredItemRetention">
            <span className="featuredTitle"> Client Retention</span>
            <div className= "featureClientContainer">
                <span className="featuredClient">95%</span>
                <span className="featuredRetentionRate">
                    <TrendingUpRounded sx = {{color: "#037E09" }}/>
                    <span className="rate">3.2%</span>
                </span>
            </div>
        </div>
    </div>
  )
}
