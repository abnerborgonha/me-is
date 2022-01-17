import styled, { StyledComponent, DefaultTheme } from 'styled-components'
import {
  SiJest,
  SiRust,
  SiCss3,
  SiHtml5,
  SiRedis,
  SiReact,
  SiLinux,
  SiGithub,
  SiRedux,
  SiPython,
  SiElixir,
  SiMongodb,
  SiLinkedin,
  SiNextDotJs,
  SiNodeDotJs,
  SiPostgresql,
  SiTypescript,
  SiJavascript,
  SiAzuredevops,
  SiGooglecloud,
  SiJsonwebtokens
} from 'react-icons/si'
import { IconType } from 'react-icons'

const DEFAULT_ICON_SIZE = 35
const TECHS_ICON_SIZE = 65

export type StyledComponentIcon = StyledComponent<
  IconType,
  DefaultTheme,
  {
    size: typeof TECHS_ICON_SIZE
  },
  'size'
>

export const GithubIcon = styled(SiGithub).attrs({
  size: DEFAULT_ICON_SIZE
})`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: #fff;
  }
`
export const LinkedinIcon = styled(SiLinkedin).attrs({
  size: DEFAULT_ICON_SIZE
})`
  cursor: pointer;
  margin: 0 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: #fff;
  }
`

export const TypescriptIcon = styled(SiTypescript).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Typescript Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.typescript};
  }
`
export const JavascriptIcon = styled(SiJavascript).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Javascript Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.javascript};
  }
`
export const ReactIcon = styled(SiReact).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'React Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.react};
  }
`
export const ReactNativeIcon = styled(SiReact).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'React Native Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.reactnative};
  }
`
export const NodeJSIcon = styled(SiNodeDotJs).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'NodeJS Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.node};
  }
`
export const NextJSIcon = styled(SiNextDotJs).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'NextJS Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.nextjs};
  }
`

export const JWTIcon = styled(SiJsonwebtokens).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Json Web Tolken Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.jwt};
  }
`
export const HTMLIcon = styled(SiHtml5).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'HTML Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.html5};
  }
`

export const CSS3Icon = styled(SiCss3).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'CSS Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.css3};
  }
`

export const PythonIcon = styled(SiPython).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Python Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.python};
  }
`

export const LinuxIcon = styled(SiLinux).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Linux Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.linux};
  }
`

export const ReduxIcon = styled(SiRedux).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Redux Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.redux};
  }
`

export const PostgresqlIcon = styled(SiPostgresql).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Postgres SQL Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.postgresql};
  }
`

export const MongoDBIcon = styled(SiMongodb).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Mongo DB Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.mongodb};
  }
`

export const RedisIcon = styled(SiRedis).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Redis Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.redis};
  }
`

export const JestIcon = styled(SiJest).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Jest Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.jest};
  }
`

export const GCPIcon = styled(SiGooglecloud).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Google Clound Plataform Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.gcp};
  }
`

export const AzureIcon = styled(SiAzuredevops).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Azure Cloud Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.azure};
  }
`
export const RustIcon = styled(SiRust).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Rust Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.rust};
  }
`

export const ElixirIcon = styled(SiElixir).attrs({
  size: TECHS_ICON_SIZE,
  alt: 'Elixir Icon'
})`
  cursor: pointer;
  margin: 10px;
  &:hover {
    transition: transform 0.3s;
    transform: translateY(-2px);
    color: ${({ theme }) => theme.colors.techs.elixir};
  }
`
