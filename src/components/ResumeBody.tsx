import React, {CSSProperties} from 'react';
import Colors from '../Colors'
import ResumeItem from './ResumeItem';

let root: CSSProperties = {
    width: '100%',
    borderRadius: 5,
}


export default function () {
    return (
        <div style={root}> 
            <ResumeItem
                img={"https://www.opensourceryumd.com/assets/images/Badge.png"}
                title={"Co-Founder of Open Sourcery UMD"}
                description={"Diverse UMD computer science organization that hosts dozens of workshops a year and enables members to pursue passion projects. Hundreds of registered members and over a dozen members present at each weekly workshop."}
                link={"https://www.opensourceryumd.com/"}
                date={"2019"}
            />
            <ResumeItem
                img={"https://media.glassdoor.com/o/314669/trifecta-technologies-office.jpg"}
                title={"Web development intern for local development company"}
                description={"Worked on a team deploying city-wide network of internet-of-things bluetooth beacons and helped develop and design an acompaning ionic full stack app."}
                link={"https://www.trifecta.com/"}
                date={"2019"}
            />
            <ResumeItem
                img={"https://d28htnjz2elwuj.cloudfront.net/wp-content/uploads/2019/04/11144035/University-of-Maryland-College-Park-400x400.jpg"}
                title={"First-Year Innovation & Research Experience "}
                description={"Implemented modern python machine image classification models using siam-networks and convolutional neural networks"}
                link={"https://www.fire.umd.edu/coml"}
                date={"2019"}
            />
            <ResumeItem
                img={"https://www.spigotmc.org/data/resource_icons/78/78759.jpg?1589327028"}
                title={"Minecraft Spogit plugin implementing dynamic price management"}
                description={"Mineacft server plugin that creats a global dynamic shop that adjusts to player actions to change prices dynamicly. Taking into account recipies and activity, prices will fluxuate in real time."}
                link={"https://www.spigotmc.org/resources/dynamic-market-2-0.78759/"}
                date={"2020"}
            />
            <ResumeItem
                img={"https://avatars3.githubusercontent.com/u/55065495?s=60&v=4"}
                title={"Data Science workshop presented at OpenSourcery "}
                description={"Introductory data science workshop that created for Open Sourcery UMD. Explores some basic relationships between employment data and other social factors pulling from glassdoors open datasets. "}
                link={"https://github.com/eric-robertson/data-science-employment/blob/master/DataWorkshop%20(3).ipynb"}
                date={"2020"}
            />
            <ResumeItem
                img={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Parse-tree.svg/1200px-Parse-tree.svg.png"}
                title={"Omni-Parser"}
                description={"Node project that allows the user to quickly define a custom language and compile instructions and then generates a compiler for the custom language that can be used on files."}
                link={"https://github.com/eric-robertson/omni-parser"}
                date={"2020"}
            />
        </div>
    )
}