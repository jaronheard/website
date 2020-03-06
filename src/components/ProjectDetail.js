/* eslint-disable react/prop-types */
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Collapsable } from "@hackoregon/ui-core";

// https://app.contentful.com/spaces/3j4jpxgb52st/content_types/project/fields

const ProjectDetail = ({
  title,
  year,
  summary,
  partners,
  description,
  program
}) => (
  <div>
    {title && <h2>{title}</h2>}
    {year && (
      <p>
        <strong>Year: </strong>
        {year}
      </p>
    )}
    {program && (
      <p>
        <strong>Program: </strong>
        {program}
      </p>
    )}
    {partners && (
      <p>
        <strong>Partners: </strong>
        {partners.join(", ")}
      </p>
    )}
    {summary && <p>{summary}</p>}
    {description && (
      <Collapsable description={title}>
        <Collapsable.Section hidden>
          <p>
            <strong>Description: </strong>
            {documentToReactComponents(description)}
          </p>
        </Collapsable.Section>
      </Collapsable>
    )}
  </div>
);

export default ProjectDetail;
