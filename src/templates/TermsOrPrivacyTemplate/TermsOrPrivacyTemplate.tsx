import {
  TermsOrPrivacyTemplate as OrgTermsOrPrivacyTemplate,
  useSwitchLanguage,
  type Language,
} from '@nekochans/lgtm-cat-ui';

import { MarkdownContents } from '../../components/MarkdownContents';

import type { FC } from 'react';

type Props = {
  type: 'terms' | 'privacy';
  language: Language;
  jaMarkdown: string;
  enMarkdown: string;
};

export const TermsOrPrivacyTemplate: FC<Props> = ({
  type,
  language,
  jaMarkdown,
  enMarkdown,
}) => {
  const {
    isLanguageMenuDisplayed,
    selectedLanguage,
    onClickEn,
    onClickJa,
    onClickLanguageButton,
    onClickOutSideMenu,
  } = useSwitchLanguage(language);

  const termsMarkdown = selectedLanguage === 'ja' ? jaMarkdown : enMarkdown;

  return (
    <OrgTermsOrPrivacyTemplate
      type={type}
      language={selectedLanguage}
      isLanguageMenuDisplayed={isLanguageMenuDisplayed}
      onClickEn={onClickEn}
      onClickJa={onClickJa}
      onClickLanguageButton={onClickLanguageButton}
      onClickOutSideMenu={onClickOutSideMenu}
    >
      <MarkdownContents markdown={termsMarkdown} />
    </OrgTermsOrPrivacyTemplate>
  );
};
