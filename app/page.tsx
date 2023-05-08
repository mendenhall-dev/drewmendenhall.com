'use client'

import '@fontsource/comfortaa'
import '@fontsource/libre-baskerville'
import Head from 'next/head'
import React, {Fragment} from 'react'
import styled from 'styled-components'
// import {MailOutline as MailIcon} from '@material-ui/icons'

import GlobalStyle from '../styles/GlobalStyle'
import jobs from '../modules/jobs'

import type {NextPage} from 'next'

const blue = '#75afec'
const breakpoint = 600
const greyDark = '#aaa'
const grey = '#ddd'
const jobSpacing = '1em'
const strokeWidth = 2

const accentColor = blue
const strokeColor = grey

const strokeColorDark = '#5a5a5a'

const Container = styled.div`
  max-width: 800px;
  margin-left: 40px;
  margin-right: 20px;

  @media print {
    margin: 0;
    max-width: initial;
  }
  @media screen and (min-width: ${breakpoint}px) {
    margin-left: 20px;
  }
  @media (min-width: 840px) {
    margin: auto;
  }
  @media print {
    padding: 0;
    max-width: auto;
  }
`
const Header = styled.header`
  font-family: Libre Baskerville, Baskerville, serif;

  padding-top: 1rem;
  @media print {
    padding-top: 0;
  }

  background: var(--background-accent-color);
  border-bottom: ${strokeWidth}px solid ${strokeColor};
  @media screen and (prefers-color-scheme: dark) {
    border-bottom-color: ${strokeColorDark};
  }

  h1 {
    margin: 0;
  }
`
const Subtitle = styled.div`
  color: ${accentColor};
  font-family: Comfortaa, sans-serif;
  font-weight: bold;
`
const EmailLink = styled.a`
  margin-top: 0.2em;
  font-family: Comfortaa, sans-serif;
  font-size: 0.8em;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.2rem;
    height: 1rem;
    width: 1rem;

    fill: rgba(0, 0, 0, 0.2);
    @media screen and (prefers-color-scheme: dark) {
      fill: rgba(255, 255, 255, 0.8);
    }
  }
  :hover svg {
    fill: currentColor;
  }
`
const Footer = styled.footer`
  min-height: 3em;
  @media print {
    min-height: 0;
  }

  background: var(--background-accent-color);
  border-top: ${strokeWidth}px solid ${strokeColor};
  @media screen and (prefers-color-scheme: dark) {
    border-top-color: ${strokeColorDark};
  }
`
const SectionHeader = styled.h2`
  font-family: Comfortaa, sans-serif;
  text-transform: uppercase;
  margin: 0;
  padding: 1em;
  @media print, screen and (min-width: ${breakpoint}px) {
    position: relative;
    left: -12%;
    margin: 0.8em 0;
    padding: 0;
    padding-top: 0.5em;
    ${'' /* Vertically center text  */}
    padding-bottom: 6px;

    background: white;
    @media screen and (prefers-color-scheme: dark) {
      background: black;
    }

    h2 {
      text-align: left;
    }
  }
`
const Section = styled(Container)`
  font-family: Libre Baskerville, Baskerville, serif;
`

const Job = styled.li`
  padding-left: 1.5em;
  list-style: none;
  border-left: ${strokeWidth}px solid ${strokeColor};
  padding: 0;
  page-break-inside: avoid;
  position: relative;

  @media print, screen and (min-width: ${breakpoint}px) {
    display: table-row;
    border-left: none;
  }
  @media screen and (prefers-color-scheme: dark) {
    border-left-color: ${strokeColorDark};
  }
`
const JobHighlights = styled.ul`
  padding-left: 1.25em;
`
const JobList = styled.ul`
  margin: 0;
  padding: 0;

  @media print, screen and (min-width: ${breakpoint}px) {
    display: table;
  }
`

const Master = styled.div`
  @media print, screen and (min-width: ${breakpoint}px) {
    display: table-cell;
    padding-right: 20px;
    text-align: right;

    border-right: ${strokeWidth}px solid ${strokeColor};
    @media screen and (prefers-color-scheme: dark) {
      border-right-color: ${strokeColorDark};
    }
  }
`
const Detail = styled.div`
  padding-left: 20px;
  padding-bottom: ${jobSpacing};

  @media print, screen and (min-width: ${breakpoint}px) {
    display: table-cell;
    position: relative;
  }

  :before {
    content: '';

    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 100%;
    background: ${accentColor};

    position: absolute;
    left: -0.3em;
    top: 0.3em;

    @media print {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
    }
  }
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

  padding-left: 20px;
  @media print, screen and (min-width: ${breakpoint}px) {
    padding-left: 0;
  }
`
const Position = styled.h4`
  margin: 0;
`

const Resume: NextPage = () => (
  <Fragment>
    <GlobalStyle />
    <Head>
      <title>Drew Mendenhall - Résumé</title>
      <meta
        content={[
          'resume',
          'software',
          'web',
          'developer',
          'front-end',
          'full-stack',
        ].join(',')}
        name="keywords"
      />
    </Head>
    <Header>
      <Container>
        <h1>Drew Mendenhall</h1>
        <Subtitle>Full-Stack Web Developer</Subtitle>
        <EmailLink href="mailto:drew@mendenhall.io">
          drew@mendenhall.io
          {/* <MailIcon /> drew@mendenhall.io */}
        </EmailLink>
        <p>
          Full-stack web developer - primarily front-end - passionate about
          using the best tools for the job. My current toolbox includes:
          TypeScript, ReactJS, Relay, Jest, React Testing Library, Styled
          Components, Storybook, Webpack, DataDog, Rollbar, Split.IO, GitHub,
          and GitHub Actions. I have experience with: NextJS, Vite, Cypress,
          Percy, CircleCI, GitLab, and GitLab CI. I am learning Ruby on Rails
          and Capybara for e2e tests.
        </p>
        <p>
          I enjoy envisioning and building apps that not only fulfill users'
          wants and needs, but also deliver low-friction, polished, and
          sometimes magical experiences.
        </p>
      </Container>
    </Header>
    <Section>
      <JobList>
        <Job>
          <Master />
          <SectionHeader>Experience</SectionHeader>
        </Job>
        {jobs.map(({startDate, endDate, company, position, highlights}) => (
          <Job key={company}>
            <Period>
              {startDate} - {endDate || 'present'}
            </Period>
            <Detail>
              <Position>{position}</Position>
              <Company>{company}</Company>
              <JobHighlights>
                {highlights.map((highlight, index) => (
                  <li key={index}>{highlight}</li>
                ))}
              </JobHighlights>
            </Detail>
          </Job>
        ))}

        <Job>
          <Master />
          <SectionHeader>Education</SectionHeader>
        </Job>
        <Job>
          <Period>2012</Period>
          <Detail>
            <Position>Bachelor of Science, Computer Engineering</Position>
            <Company>The University of Texas at Dallas</Company>
          </Detail>
        </Job>
      </JobList>
    </Section>
    <Footer>
      <Container />
    </Footer>
  </Fragment>
)

export default Resume
