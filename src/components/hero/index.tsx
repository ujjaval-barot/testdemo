import {TagArray} from 'components/common/tag-array';
import ConditionalWrapper from 'components/utils/ConditionalWrapper';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {TagArrayProp, HeroProps} from 'src/interfaces';
import documentToReactComponents from 'utils/documentToReactComponents';
import {
  HeroContainer,
  GenericHero,
  ImageContainer,
  HeroTitle,
  HeroButton,
  Description,
  ArticleDate,
  StyledS3Logo,
  HeroButtonLight,
} from './hero.styles';

export const Hero: React.FC<HeroProps> = ({
  title,
  bordered = true,
  description,
  ctasCollection,
  article,
  image,
  showS3Logo,
  darkButton = true,
}) => {
  let imageSrc: string | null = null;
  let tags: TagArrayProp[] | null = null;

  if (article?.featuredImage) {
    imageSrc = article.featuredImage.url;
  } else if (image) {
    imageSrc = image.url;
  }

  if (article?.contentfulMetadata.tags) {
    tags = article?.contentfulMetadata.tags;
  }

  return (
    <HeroContainer border={bordered}>
      {(showS3Logo || image || article?.featuredImage) && (
        <ImageContainer showS3Logo={showS3Logo}>
          {showS3Logo ? <StyledS3Logo /> : imageSrc && <Image src={imageSrc} layout="fill" objectFit="cover" />}
        </ImageContainer>
      )}
      <GenericHero border={bordered}>
        {tags && <TagArray tags={tags} />}
        {title || article?.title ? <HeroTitle>{title ?? article?.title}</HeroTitle> : null}
        {description && (
          <Description hasDate={Boolean(article?.publishedAt ?? article?.sys.firstPublishedAt)}>
            {documentToReactComponents(description)}
          </Description>
        )}
        {article && <ArticleDate date={article.publishedAt ?? article.sys.firstPublishedAt} />}
        {Boolean(ctasCollection?.items?.length)
          ? ctasCollection?.items.map((cta, index) => (
              <a href={cta.link} key={index}>
                <ConditionalWrapper
                  condition={darkButton}
                  wrapper={children => <HeroButton>{children}</HeroButton>}
                  elseWrapper={children => <HeroButtonLight>{children}</HeroButtonLight>}
                >
                  {cta.text}
                </ConditionalWrapper>
              </a>
            ))
          : article && (
              <Link href={`/articles/${article.seo.pageSlug}`}>
                <a>
                  <ConditionalWrapper
                    condition={darkButton}
                    wrapper={children => <HeroButton>{children}</HeroButton>}
                    elseWrapper={children => <HeroButtonLight>{children}</HeroButtonLight>}
                  >
                    Read More
                  </ConditionalWrapper>
                </a>
              </Link>
            )}
      </GenericHero>
    </HeroContainer>
  );
};

export default Hero;
