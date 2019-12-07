import React from 'react';
import {AppBase} from './App.style';
import {FooterMenuStyleTwo} from "./components/FooterMenuStyleTwo/FooterMenuStyleTwo";
import {BlogPostStyleTwo} from "./components/BlogPostStyleTwo/BlogPostStyleTwo";
import {FeatureStyleTwo} from "./components/FeatureStyleTwo/FeatureStyleTwo";
import {FeatureStyleThree} from "./components/FeatureStyleThree/FeatureStyleThree";
import {FeatureStyleFour} from "./components/FeatureStyleFour/FeatureStyleFourBase";
import {GalleryStyleOne} from "./components/GalleryStyleOne/GalleryStyleOne";
import {PortfolioStyleOne} from "./components/PortfolioStyleOne/PortfolioStyleOne";
import {MasterHeaderStyleTwo} from "./components/MasterHeaderStyleTwo/MasterHeaderStyleTwo";

const App: React.FC = () => {

    return <AppBase>

        {/* Master head */}
        <MasterHeaderStyleTwo/>

         {/*Feature Styled Two*/}
        <FeatureStyleTwo title={"Unser Hotelangebot"}
                         caption={`Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />

         {/*Feature Styled Four*/}
        <FeatureStyleFour title={"Make a reservation"} caption={"..."}/>

        {/*Feature Styled Three*/}
        <FeatureStyleThree title={"Special Deals"} caption={"bla bla"}/>

        {/* Blog Post Style Two*/}
        <BlogPostStyleTwo title={"Unser Hotel Essen"}
                          caption={` At vero eos et accusamus et iusto odio dignissimos 
                          ducimus qui blanditiis praesentium voluptatum deleniti atque 
                          corrupti quos dolores et quas molestias excepturi sint 
                          occaecati cupiditate non provident`}
        />

        {/*CardProfileSimple*/}
        <PortfolioStyleOne title={"Von unseren Gästen"}
                             caption={`Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo.
                        Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />

        {/*Gallery*/}
        <GalleryStyleOne title={"von Instagram"}
                         caption={`Lorem ipsum dolor sit amet consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.
                           Nullam id dolor id nibh ultricies vehicula ut id elit.`}
        />

         {/*Footer Menu*/}
        <FooterMenuStyleTwo/>

    </AppBase>
};

export default App;
