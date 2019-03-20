import React from 'react'

import SEO from '../components/seo'

export default () => (
  <React.Fragment>
    <SEO title="Resume" keywords={['resume', 'software', 'web', 'developer']} />
    <header>
      <h1>Drew Mendenhall</h1>
    </header>
    <h2>Experience</h2>
    <ul>
      <li>
        <h3>Noomist</h3>
        <div className="period">Mar 2018 - present</div>
        <ul className="highlights">
          <li>
            Designed, architected, and a mobile web application using React,
            Redux, and GraphQL.
          </li>
          <li>
            Implement the same feature set and RFID via Bluetooth on iOS and
            Android using React Native.
          </li>
          <li>
            Maintain a deployment pipeline with one QA environment per git
            branch via Terraform, GitLab, and Docker.
          </li>
        </ul>
      </li>
      <li>
        <h3>Elemetal</h3>
        <div className="period">Jan 2016 - Mar 2018</div>
        <ul className="highlights">
          <li>
            Maintained large Angular application that keeps track of customers,
            inventory, and shipments.
          </li>
          <li>
            Migrate - one page at a time - to a more responsive and reliable
            version built on nodejs, GraphQL, React, and Redux.
          </li>
          <li>
            Administered linux servers and deployment pipeline on Docker and
            nginx.
          </li>
          <li>
            Maintained public web site and built integration with Docusign for
            new customer applications.
          </li>
        </ul>
      </li>
      <li>
        <h3>DonorDirect</h3>
        <div className="period">Aug 2014 - Jun 2015</div>
        <ul className="highlights">
          <li>
            Helped build a new Web UI, powered by React and Backbone, for a
            full-featured donor management system. This replaced a WPF/C#
            desktop application.
          </li>
          <li>
            Architected a library of basic, reusable HTML snippets, backed by
            LESS styling, which follow visual design specifications, pixel for
            pixel.
          </li>
          <li>
            Leveraged the grunt.js build system to enable and enhance rapid
            iteration in daily development workflow, with no compromises.
          </li>
          <li>
            Worked as part of a medium-size scrum team which follows agile
            software development practices.
          </li>
        </ul>
      </li>
      <li>
        <h3>Intuit</h3>
        <div className="period">Sep 2013 - Apr 2014</div>
        <ul className="highlights">
          <li>
            Constructed a one-stop web application for accountants as a
            composition of AngularJS modules.
          </li>
          <li>
            Architected a library of basic, reusable HTML snippets, backed by
            LESS styling, which follow visual design specifications, pixel for
            pixel.
          </li>
          <li>
            Leveraged the grunt.js build system to enable and enhance rapid
            iteration in daily development workflow, with no compromises.
          </li>
          <li>
            Worked as part of a medium-size scrum team which follows agile
            software development practices.
          </li>
        </ul>
      </li>
    </ul>
  </React.Fragment>
)
