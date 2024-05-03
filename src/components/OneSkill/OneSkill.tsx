import React from 'react';
import './OneSkill.css';
import js from './../../assets/js.svg'
import ts from './../../assets/typescript.svg'
import github from './../../assets/github.svg'
import gitLogo from './../../assets/git.svg';
import htmlLogo from './../..//assets/html.svg';
import cssLogo from './../../assets/css.svg';
import sassLogo from './../../assets/sass.svg';
import bootstrapLogo from './../../assets/bootstrap.svg';
import jqueryLogo from './../../assets/jquery.svg';
import primLogo from './../../assets/prim.svg';
/*vhvnbv
*/

type SkillItem = {
    title: string;
    imgSrc: string;
    DocsLink: string;
};

type SkillCategory = {
    skillTitle: string;
    skillItems: SkillItem[];
};

const skills: SkillCategory[] = [
    {
        skillTitle: "Programming Languages",
        skillItems: [
            { title: "JavaScript", imgSrc: js, DocsLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
            { title: "TypeScript", imgSrc:ts, DocsLink: 'https://www.typescriptlang.org/' },
        ]
    },
    {
        skillTitle: 'FrameWorks',
        skillItems: [
            { title: "Angular", imgSrc: github, DocsLink: 'https://angular.io/' },
        ]
    },
    {
        skillTitle: 'Markup Language',
        skillItems: [
            { title: "Html", imgSrc:htmlLogo, DocsLink: 'https://angular.io/' },
            { title: "Css", imgSrc: cssLogo, DocsLink: 'https://angular.io/' },
            { title: "Sass", imgSrc: sassLogo, DocsLink: 'https://angular.io/' },
        ]
    },
    {
        skillTitle: 'Libraries',
        skillItems: [
            { title: "Bootstrap", imgSrc: bootstrapLogo, DocsLink: 'https://angular.io/' },
            { title: " jQuery", imgSrc: jqueryLogo, DocsLink: 'https://angular.io/' },
            { title: " PrimeNG", imgSrc: primLogo, DocsLink: 'https://angular.io/' },
        ]
    },
    {
        skillTitle: 'Additional Skills',
        skillItems: [
            { title: "GitHub", imgSrc: github, DocsLink: 'https://angular.io/' },
            { title: "Git", imgSrc: gitLogo, DocsLink: 'https://angular.io/' },

        ]
    },
   
];

const OneSkill: React.FC = () => {
    return (
        <div className="skills-container">
            {skills.map((category, index) => (
                <div key={index} className="skill-category">
                    <h2>{category.skillTitle}</h2>
                    <div className="skill-items">
                        {category.skillItems.map((item, idx) => (
                            <div key={idx} className="skill-item">
                                <h3>{item.title}</h3>
                                <img src={item.imgSrc} alt={item.title} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OneSkill; 
