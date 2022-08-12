import {
  TermsOrPrivacyTemplate as OrgTermsOrPrivacyTemplate,
  useSwitchLanguage,
  type Language,
} from '@nekochans/lgtm-cat-ui';

import { MarkdownContents } from '../../components';
import { metaTagList } from '../../features/metaTag';
import { DefaultLayout } from '../../layouts';

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

  const metaTag =
    type === 'terms' ? metaTagList().terms : metaTagList().privacy;

  return (
    <DefaultLayout metaTag={metaTag}>
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
    </DefaultLayout>
  );
};
