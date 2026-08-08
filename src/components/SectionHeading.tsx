import React from 'react';

type SectionHeadingProps = {
  title: string;
  description?: string;
};

export function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <h2 className="text-2xl font-semibold tracking-tight text-accent-400 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ?
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slateish-400 sm:text-base">
          {description}
        </p> :
      null}
    </div>);

}
