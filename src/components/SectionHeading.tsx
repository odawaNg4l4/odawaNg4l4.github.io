import React from 'react';

type SectionHeadingProps = {
  index: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14">
      <div className="mb-3 flex items-center gap-3 font-mono text-xs tracking-widest text-mint-400">
        <span>{index}</span>
        <span className="h-px w-10 bg-mint-400/40" aria-hidden="true" />
        <span className="uppercase">{title}</span>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-slateish-100 sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description ?
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slateish-400 sm:text-base">
          {description}
        </p> :
      null}
    </div>);

}