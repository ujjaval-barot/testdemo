import React, {useState} from 'react';
import {Footer} from 'src/components/footer/index';
import {Nav} from 'src/components/nav/index';

import {GetStaticProps} from 'next';
import {DefaultPageProps} from 'src/interfaces';
import getDefaulStaticProps from 'src/utils/getDefaultStaticProps';
import Head from 'components/core/head';
import SiteWrap from 'src/components/common/site-wrap';
import {HeroArticle} from 'components/hero/heroArticle';
import {Article, Input, PrimaryButtonDark, SectionTitle} from 'components';
import {RelatedArticlesDisplay} from 'components/relatedArticlesDisplay';
import useLocalStorage from '../../src/localStorage/localStorage';
import {ArticleContainer} from 'components/articleBody/article.styles';
import {InputWithDropdown} from 'components/inputWithDropdown';
import {Title, Subtitle, SubtitleLink} from 'components/titleButtonCard/titleButtonCard.styles';

export const ArticleTemplate: React.FC<DefaultPageProps> = ({
  articleData,
  navHeaderData,
  navFooterData,
}): JSX.Element => {
  const article = articleData!.content;
  const [contactFormFilled, setContactFormFilled] = useLocalStorage('contactFormFilled', false);

  const [disable, setDisable] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    how: '',
    company: '',
    jobTitle: '',
  });

  const validateInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisable(true);
    const response = await fetch('/api/article/access', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(contact),
    });

    const responseJson = await response.json();
    if (responseJson.status === 200) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      setContactFormFilled(true);
    } else {
      setDisable(false);
    }
  };

  const content = contactFormFilled ? (
    <React.Fragment>
      <SiteWrap hasPadding={false}>
        <HeroArticle article={article} />
      </SiteWrap>
      <SiteWrap>
        <Article {...article} />
        <SectionTitle>Related Articles</SectionTitle>
        {Boolean(article.relatedArticles?.articlesCollection?.items.length) && (
          <RelatedArticlesDisplay data={article.relatedArticles!.articlesCollection!.items} />
        )}
      </SiteWrap>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <SiteWrap hasPadding={false}>
        <HeroArticle article={article} />
      </SiteWrap>
      <SiteWrap>
        <ArticleContainer>
          <Title titleCard={false}>Start Exploring Free Research Today</Title>
          <Subtitle>
            Fill in your details for immediate access to our latest insights. We prioritize your privacy. See how we
            protect your data <SubtitleLink href="/privacy">here</SubtitleLink>.
          </Subtitle>
          <form onInvalid={e => e.preventDefault()} onSubmit={validateInfo} style={{display: 'contents'}}>
            <Input
              value={contact.name}
              setValue={setContact}
              id="Full-Name"
              name="FULL NAME*"
              required={true}
              type="text"
              field="name"
              object={contact}
              invalidMessage="Place your full name"
            />
            <Input
              value={contact.company}
              setValue={setContact}
              id="Company"
              name="COMPANY NAME*"
              required={true}
              type="text"
              field="company"
              object={contact}
              invalidMessage="Place your company name"
            />
            <Input
              value={contact.email}
              setValue={setContact}
              id="Email"
              name="EMAIL*"
              required={true}
              type="email"
              field="email"
              object={contact}
              invalidMessage="Place a valid email"
            />
            <Input
              value={contact.phone}
              setValue={setContact}
              id="Phone"
              name="PHONE"
              required={false}
              type="text"
              field="phone"
              object={contact}
            />
            <InputWithDropdown
              value={contact.jobTitle}
              setValue={setContact}
              id="Job Title"
              name="JOB TITLE"
              required={false}
              field="jobTitle"
              object={contact}
              options={[
                'Analyst',
                'Portfolio Manager',
                'Retail Investment Advisor',
                'Institutional Trader',
                'Retail Trader',
                'Operations',
              ]}
              otherTextInput={true}
              otherTextInputPlaceholder={'Enter your job title'}
            />
            <InputWithDropdown
              value={contact.how}
              setValue={setContact}
              id="How"
              name="How did you find us?"
              required={false}
              field="how"
              object={contact}
              options={['LinkedIn', 'X (Formerly Twitter)', 'News article', 'Bloomberg Terminal']}
              otherTextInput={true}
              otherTextInputPlaceholder={'How did you find us?'}
            />
            <div>
              <PrimaryButtonDark disabled={disable} type="submit">
                Submit
              </PrimaryButtonDark>
            </div>
          </form>
        </ArticleContainer>
        <SectionTitle>Related Articles</SectionTitle>
        {Boolean(article.relatedArticles?.articlesCollection?.items.length) && (
          <RelatedArticlesDisplay data={article.relatedArticles!.articlesCollection!.items} />
        )}
      </SiteWrap>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <Head {...articleData!.seo} />
      <Nav navData={navHeaderData} />
      {content}
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getStaticPaths = () => ({
  paths: [],
  fallback: 'blocking',
});

export const getStaticProps: GetStaticProps = async ({preview = false, params}) => {
  const {slug} = params as {slug: string};

  return await getDefaulStaticProps(
    {preview},
    {
      articleSlug: slug,
    }
  );
};

export default ArticleTemplate;
