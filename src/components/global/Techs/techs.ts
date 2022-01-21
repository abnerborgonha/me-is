import {
  GCPIcon,
  JWTIcon,
  JestIcon,
  HTMLIcon,
  CSS3Icon,
  RustIcon,
  RedisIcon,
  AzureIcon,
  LinuxIcon,
  ReduxIcon,
  ReactIcon,
  PythonIcon,
  NodeJSIcon,
  NextJSIcon,
  MongoDBIcon,
  JavascriptIcon,
  PostgresqlIcon,
  TypescriptIcon,
  ReactNativeIcon,
  StyledComponentIcon,
  ElixirIcon
} from '../../../styles/icons/styles'

interface ITech {
  icon: StyledComponentIcon
  url: string
}
const techs: ITech[] = [
  {
    icon: TypescriptIcon,
    url: 'https://www.typescriptlang.org/'
  },
  {
    icon: JavascriptIcon,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    icon: ReactIcon,
    url: 'https://reactjs.org/'
  },
  {
    icon: ReactNativeIcon,
    url: 'https://reactnative.dev/'
  },
  {
    icon: NodeJSIcon,
    url: 'https://nodejs.org/en/'
  },
  {
    icon: NextJSIcon,
    url: ' https://nextjs.org/'
  },
  {
    icon: JWTIcon,
    url: 'https://jwt.io/'
  },
  {
    icon: HTMLIcon,
    url: 'https://html.spec.whatwg.org/multipage/'
  },
  {
    icon: CSS3Icon,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS'
  },
  {
    icon: PythonIcon,
    url: 'https://www.python.org/'
  },
  {
    icon: LinuxIcon,
    url: 'https://www.linux.org/'
  },
  {
    icon: ReduxIcon,
    url: 'https://redux.js.org/'
  },
  {
    icon: PostgresqlIcon,
    url: 'https://www.postgresql.org/'
  },
  {
    icon: MongoDBIcon,
    url: 'https://www.mongodb.com/'
  },
  {
    icon: RedisIcon,
    url: 'https://redis.io/'
  },
  {
    icon: JestIcon,
    url: 'https://jestjs.io/pt-BR/'
  },
  {
    icon: GCPIcon,
    url: 'https://cloud.google.com/'
  },
  {
    icon: AzureIcon,
    url: 'https://azure.microsoft.com/pt-br/'
  },
  {
    icon: RustIcon,
    url: 'https://www.rust-lang.org/pt-BR'
  },
  {
    icon: ElixirIcon,
    url: 'https://elixir-lang.org/'
  }
]

export default techs
