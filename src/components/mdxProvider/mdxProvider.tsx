import React from 'react';
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react';

import ABlock from './aBlock';
import CodeBlock from './codeBlock';
import PreBlock from './preBlock';
import HBlock from './hBlock';
import FigcaptionBlock from './figcaptionBlock';
import TimeBlock from './timeBlock';
import ScriptBlock from './scriptBlock';
import PBlock from './pBlock';

const MdxProviderComponents: MDXProviderComponents = {
  a: ABlock,
  code: CodeBlock,
  pre: PreBlock,
  h1: HBlock.H1Block,
  h2: HBlock.H2Block,
  h3: HBlock.H3Block,
  h4: HBlock.H4Block,
  h5: HBlock.H5Block,
  h6: HBlock.H6Block,
  figcaption: FigcaptionBlock,
  time: TimeBlock,
  script: ScriptBlock,
  p: PBlock,
};

type MdxProviderProps = {
  children: React.ReactNode;
};

const MdxProvider: React.FunctionComponent<MdxProviderProps> = ({ children }) => <MDXProvider components={MdxProviderComponents}>{children}</MDXProvider>;

MdxProvider.displayName = 'MdxProvider';

export default MdxProvider;
