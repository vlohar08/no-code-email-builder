import Footer from "@/components/client/Footer";
import Header from "@/components/client/Header";
import React from "react";
// @ts-ignore
import ReactMarkdown from "react-markdown";

function PrivacyPolicy() {
  return (
    <main className="policies-wrapper">
      <Header />
      <div>
        <article>
          <ReactMarkdown>{`# Privacy Policy

This Privacy Policy describes how we collect, use, and handle your personal information when you use the No Code Email Builder (the "Service"). Please read this policy carefully to understand how we handle your data.

## Information We Collect

### Cloud Hosted Version

If you use the cloud hosted version of the Service, we collect the following personal information to personalize your experience:

- Name: We collect your name to personalize your profile and user interface.
- Profile Image: We collect your profile image to display within the Service.
- Email Address: We collect your email address to associate it with your account and for communication purposes.
- Additional Information: We may collect other information you choose to provide, such as a bio or contact details, to enhance your user experience.

### Self-Hosted Version

If you host the Service on your own server, we do not collect any personal information. The data remains solely within your control and responsibility.

## Use of Personal Information

If you use the cloud hosted version of the Service, we use the collected personal information for the following purposes:

- Personalization: We use your name, profile image, and other provided information to personalize your experience within the Service.

## Data Collection Technologies

### Cookies

We use cookies on both the cloud hosted and self-hosted versions of the Service. These cookies are used for authentication purposes and to provide a seamless user experience. However, please note that the cookies used in the self-hosted version are controlled and managed by you, as you host the Service on your own server.

You have the option to disable cookies in your browser settings, but please note that this may limit certain functionality of the Service.

## Data Security

We prioritize the security of your personal information. If you use the cloud hosted version of the Service, we implement appropriate technical and organizational measures to protect your data from unauthorized access, use, or disclosure. For the self-hosted version, it is your responsibility to ensure the security of your data on your server.

## Third-Party Services

The Service may integrate with or link to third-party services or websites. This Privacy Policy does not apply to the practices of such third parties. We encourage you to review the privacy policies of those third parties before using their services.

## Changes to this Privacy Policy

We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised policy. We encourage you to review this Privacy Policy periodically.

## Contact Us

If you have any questions or concerns about this Privacy Policy or the No Code Email Builder, please contact us at [vlohargb@gmail.com](mailto:vlohargb@gmail.com).
`}</ReactMarkdown>
        </article>
      </div>
      <Footer />
    </main>
  );
}

export default PrivacyPolicy;
