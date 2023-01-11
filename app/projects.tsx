// eslint-disable-next-line import/no-extraneous-dependencies
import {
    use
} from 'react';

import {
    sanityClient
} from '../sanity';

import CardWrapperComponent from '../components/CardWrapperComponent';
import Project from '../components/ProjectComponent';

async function getProjects() {
    const query = `*[_type=='projects'] {
        'id': _id,
        'name': slug.current, 
          title,
          skills, 
          links, 
          summary
      }`;

    const result = await sanityClient.fetch(query);
    return result;
}

export default function ProjectsComponent() {
    const projects = use(getProjects());
    return (
        <div>
            {/* <CardWrapperComponent> */}
            {projects.map((project) => {
                const {
                    id, links, name, skills, summary, title
                } = project;

                return (
                    <Project
                        // githubURL={links.github.link}
                        key={id}
                        skills={skills}
                        summary={summary}
                        title={title}
                    />
                );
            }) }
            {/* <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project>
                <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project>
                <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project>
                <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project>
                <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project>
                <Project>
                    <div className={'w-full bg-grey-darker h-3/4 rounded-lg'}>Image</div>
                    <div className={'text-start space-y-1'}>
                        <h3 className={''}>Title goes here</h3>
                        <p className={'text-xs text-grey-darker'}>This is where description goes</p>
                    </div>
                </Project> */}
            {/* </CardWrapperComponent> */}
        </div>
    );
}
