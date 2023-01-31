import {
    use
} from 'react';

import {
    sanityClient, urlFor
} from '../sanity';
import {
    ProjectProps
} from '../types';

import Project from '../components/ProjectComponent';

async function getProjects() {
    const query = `*[_type=='projects'] {
        'id': _id,
        'name': slug.current, 
          title,
          skills, 
          links, 
          summary,
          image
      }`;

    const result = await sanityClient.fetch(query);
    return result;
}

export default function ProjectsComponent() {
    const projects = use(getProjects());
    return (
        <div
            className={'space-y-4 mb-10 p-5'}
            id={'projects'}
        >
            {/* <CardWrapperComponent> */}
            <h2
                className={'text-3xl text-left dark:text-white-primary mb-10'}
            >My Recent Projects
            </h2>
            {projects.map((project: ProjectProps) => {
                const {
                    id, image, links, name, skills, summary, title
                } = project;

                return (
                    <Project
                        id={id}
                        imageURL={image ? urlFor(image).width(200).height(200).url() : null}
                        key={id}
                        links={links}
                        name={name}
                        skills={skills}
                        summary={summary}
                        title={title}
                    />
                );
            }) }
        </div>
    );
}
