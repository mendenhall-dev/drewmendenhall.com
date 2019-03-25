import 'typeface-comfortaa'
import 'typeface-libre-baskerville'
import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../GlobalStyle'
import SEO from '../components/seo'
import jobs from '../jobs'

const blue = '#75afec'
const greyDark = '#aaa'
const grey = '#ddd'
const greyLight = '#f8f8f8'
const jobSpacing = '3em'
const strokeWidth = 2

const accentColor = blue
const strokeColor = grey

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
  font-family: Libre Baskerville, Baskerville, serif;
  background: ${greyLight};
  border-bottom: ${strokeWidth}px solid ${strokeColor};
  padding-top: 1rem;

  h1 {
    margin: 0;
  }
`
const Subtitle = styled.div`
  color: ${accentColor};
  font-family: Comfortaa, sans-serif;
  font-weight: bold;
`
const Footer = styled.footer`
  background: ${greyLight};
  border-top: ${strokeWidth}px solid ${strokeColor};
  min-height: 3em;
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
  page-break-inside: avoid;
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
  border-right: ${strokeWidth}px solid ${strokeColor};
  text-align: right;
`
const Detail = styled.div`
  display: table-cell;
  padding-left: 20px;
  padding-bottom: ${jobSpacing};

  position: relative;

  :before {
    content: '';

    display: block;
    width: 0.5em;
    height: 0.5em;
    border-radius: 100%;
    background: ${accentColor};

    position: absolute;
    left: -0.35em;
    top: 0.25em;

    @media print {
      -webkit-print-color-adjust: exact;
      color-adjust: exact;
      display: block;
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
        <Subtitle>Full-Stack Web Developer</Subtitle>
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
        {jobs.map(({startDate, endDate, company, position, highlights}) => (
          <Job key={company}>
            <Period>
              {startDate} - {endDate || 'present'}
            </Period>
            <Detail>
              <Position>{position}</Position>
              <Company>{company}</Company>
              <JobHighlights>
                {highlights.map(highlight => (
                  <li>{highlight}</li>
                ))}
              </JobHighlights>
            </Detail>
          </Job>
        ))}

        <Job>
          <Master>
            <SectionHeader>Education</SectionHeader>
          </Master>
        </Job>
        <Job>
          <Period>2012</Period>
          <Detail>
            <Position>Bachelor of Science, Computer Engineering</Position>
            <Company>The University of Texas at Dallas</Company>
          </Detail>
        </Job>
        <Job>
          <Period>2006</Period>
          <Detail>
            <Company>Jesuit Dallas</Company>
          </Detail>
        </Job>
      </JobList>
    </Section>
    <Footer>
      <Container />
    </Footer>
  </React.Fragment>
)
