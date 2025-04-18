import React from 'react';
import {useRouter} from 'next/router';
import {useState} from 'react';

import {Footer} from 'src/components/footer/index';
import {Nav} from 'src/components/nav/index';
import Head from 'components/core/head';
import {ContactFormWrapper, ContactPartWrap} from 'src/components/wrapper';
import {Input} from 'src/components/input';
import {Select} from 'src/components/select/';
import {TextArea} from 'src/components/textArea/';
import {PrimaryButtonDark} from 'src/components/buttons/primaryDark';

import SiteWrap from 'src/components/common/site-wrap';
import {DefaultPageProps} from 'src/interfaces';
import {GetStaticProps} from 'next';
import getDefaulStaticProps from 'src/utils/getDefaultStaticProps';
import {List} from 'components/core/list';

export const Contact: React.FC<DefaultPageProps> = ({pageData, navHeaderData, navFooterData}): JSX.Element => {
  const router = useRouter();
  const [disable, setDisable] = useState(false);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    hear: '',
    company: '',
    jobTitle: '',
    message: '',
  });

  const validateInfo = async (e: React.FormEvent) => {
    e.preventDefault();
    setDisable(true);
    const response = await fetch('api/contact/', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(contact),
    });

    const responseJson = await response.json();
    if (responseJson.status === 200) {
      router.push('/confirmation');
    } else {
      router.push('/error');
    }
  };

  return (
    <React.Fragment>
      <Head {...pageData!.seo} />
      <Nav navData={navHeaderData} />
      <List pageData={pageData!} />
      <SiteWrap>
        <ContactFormWrapper>
          <form onInvalid={e => e.preventDefault()} onSubmit={validateInfo} style={{display: 'contents'}}>
            <ContactPartWrap>
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
              <Select
                value={contact.reason}
                setValue={setContact}
                id="Reason-Contact"
                name="Reason for inquiry*"
                options={['Media inquiry', 'General inquiry', 'Demo request']}
                required={true}
                object={contact}
                field="reason"
                invalidMessage="Please select an option from the list"
              />
              <Select
                value={contact.hear}
                setValue={setContact}
                id="Hear-Contact"
                name="How did you hear about us?*"
                options={['Linkedin', 'Twitter', 'News Media / TV', 'Referral', 'Industry Event / Conference', 'Other']}
                required={true}
                object={contact}
                field="hear"
              />
              <h6>Company</h6>
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
                value={contact.jobTitle}
                setValue={setContact}
                id="Company"
                name="JOB TITLE"
                required={false}
                type="text"
                field="jobTitle"
                object={contact}
              />
            </ContactPartWrap>
            <ContactPartWrap>
              <h6>Your Message</h6>
              <TextArea
                value={contact.message}
                setValue={setContact}
                id="Message-Contact"
                name="MESSAGE"
                required={false}
                rows={6}
                object={contact}
                field="message"
              />
              <PrimaryButtonDark disabled={disable} type="submit">
                Submit
              </PrimaryButtonDark>
            </ContactPartWrap>
          </form>
        </ContactFormWrapper>
      </SiteWrap>
      <Footer footerData={navFooterData} />
    </React.Fragment>
  );
};

export const getStaticProps: GetStaticProps = async ({preview = false}) => {
  return await getDefaulStaticProps({preview}, {pageSlug: 'contact'});
};

export default Contact;
