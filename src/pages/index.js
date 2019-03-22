import 'typeface-comfortaa'
import 'typeface-libre-baskerville'
import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import SEO from '../components/seo'

const greyDark = '#aaa'
const grey = '#ddd'
const greyLight = '#f8f8f8'
const jobSpacing = '3em'

const Container = styled.div`
  max-width: 800px;
  margin-left: 20px;
  margin-right: 20px;

  @media (min-width: 840px) {
    margin: auto;
  }
  @media print {
    padding: 0;
    max-width: auto;
  }
`
const Header = styled.header`
  font-family: Libre Baskerville, Baskerville;
  background: ${greyLight};
  border-bottom: 3px solid ${grey};
  padding-top: 1rem;

  h1 {
    margin: 0;
  }
`
const Footer = styled.footer`
  background: ${greyLight};
  border-top: 3px solid ${grey};
  min-height: 3em;

  @media print {
    display: none;
  }
`
const SectionHeader = styled.h2`
  font-family: Comfortaa, sans-serif;
  text-transform: uppercase;
  position: relative;
  left: 66.7%;
  background: white;
  padding: 0.5em;
  ${'' /* Vertically center text  */}
  padding-bottom: 6px;
`
const Section = styled(Container)`
  font-family: Libre Baskerville, Baskerville, serif;
`

const Job = styled.li`
  display: table-row;
  padding-left: 1.5em;
  list-style: none;
  padding: 0;
`
const JobHighlights = styled.ul`
  padding-left: 1.25em;
`
const JobList = styled.ul`
  display: table;
  margin: 0;
  padding: 0;
`

const Master = styled.div`
  display: table-cell;
  padding-right: 20px;
  border-right: 3px solid ${grey};
  text-align: right;
`
const Detail = styled.div`
  display: table-cell;
  flex-shrink: 1;
  padding-left: 20px;

  padding-bottom: ${jobSpacing};
`

const Company = styled.div`
  color: ${greyDark};
  @media print {
    color: inherit;
  }
`
const Period = styled(Master)`
  font-family: Comfortaa;
  font-weight: bold;
  text-transform: uppercase;
  white-space: nowrap;
`
const Position = styled.h4`
  margin: 0;
`

export default () => (
  <React.Fragment>
    <GlobalStyle />
    <SEO title="Resume" keywords={['resume', 'software', 'web', 'developer']} />
    <Header>
      <Container>
        <h1>Drew Mendenhall</h1>
        <p>
          Full-stack web developer passionate about using the best tools for the
          job. I have primarily worked on ASP.NET and NodeJS back-ends, and I am
          open to learning new languages.
        </p>
        <p>
          I maintain my own GitLab instance with custom docker-based CI/CD
          pipelines for personal projects.
        </p>
        <p>
          I enjoy envisioning and building something that not only fulfills
          users' wants and needs, but also delivers a low-friction, polished,
          and sometimes magical experience.
        </p>
      </Container>
    </Header>
    <Section>
      <JobList>
        <Job>
          <Master>
            <SectionHeader>Experience</SectionHeader>
          </Master>
        </Job>
        <Job>
          <Period>Mar 2018 - present</Period>
          <Detail>
            <Position>CTO & Co-Founder</Position>
            <Company>Noomist</Company>
            <JobHighlights>
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
            </JobHighlights>
          </Detail>
        </Job>
        <Job>
          <Period>Jan 2016 - Mar 2018</Period>
          <Detail>
            <Position>Software Developer</Position>
            <Company>Elemetal</Company>
            <JobHighlights>
              <li>
                Maintained large Angular application that keeps track of
                customers, inventory, and shipments.
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
                Maintained public web site and built integration with Docusign
                for new customer applications.
              </li>
            </JobHighlights>
          </Detail>
        </Job>
        <Job>
          <Period>Aug 2014 - Jun 2015</Period>
          <Detail>
            <Position>Software Developer</Position>
            <Company>DonorDirect</Company>
            <JobHighlights>
              <li>
                Helped build a new Web UI, powered by React and Backbone, for a
                full-featured donor management system. This replaced a WPF/C#
                desktop application.
              </li>
              <li>
                Architected a library of basic, reusable HTML snippets, backed
                by LESS styling, which follow visual design specifications,
                pixel for pixel.
              </li>
              <li>
                Leveraged the grunt.js build system to enable and enhance rapid
                iteration in daily development workflow, with no compromises.
              </li>
              <li>
                Worked as part of a medium-size scrum team which follows agile
                software development practices.
              </li>
            </JobHighlights>
          </Detail>
        </Job>
        <Job>
          <Period>Sep 2013 - Apr 2014</Period>
          <Detail>
            <Position>Front End UI Developer</Position>
            <Company>Intuit</Company>
            <JobHighlights>
              <li>
                Constructed a one-stop web application for accountants as a
                composition of AngularJS modules.
              </li>
              <li>
                Architected a library of basic, reusable HTML snippets, backed
                by LESS styling, which follow visual design specifications,
                pixel for pixel.
              </li>
              <li>
                Leveraged the grunt.js build system to enable and enhance rapid
                iteration in daily development workflow, with no compromises.
              </li>
              <li>
                Worked as part of a medium-size scrum team which follows agile
                software development practices.
              </li>
            </JobHighlights>
          </Detail>
        </Job>
      </JobList>
    </Section>
    <Footer>
      <Container />
    </Footer>
  </React.Fragment>
)
