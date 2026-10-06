# TO Dos by jalaj

Based on the feedback document, the following items need to be addressed and updated for the Investright website and materials.

## 1. Fix Immediately: Errors and Contradictions

- **Fee structure contradicts itself**: 
  - The homepage states you earn only when the investor does, with no flat management fees eating into capital. 
  - The About page FAQ states a 2% per annum management fee and a 20% performance fee above a 10% hurdle. 
  - Neither matches the actual structure: zero management fee below 10% returns, zero performance fee below 25%, and an 80/20 split above that.
  - **Action**: Rewrite the FAQ and add a proper fee section on the Products page.

- **A fund that doesn't exist**: 
  - The FAQ mentions a minimum of ₹1 Crore for equity strategies and ₹50 Lakhs for a "Multi-Asset Diversified Fund". There is no such fund, and ₹50 lakh is below the Cat III minimum.
  - **Action**: Delete this line.

- **Corpus and dates don't match**: 
  - The About stats show ₹500 Cr target corpus, "Founded 2026", and "25+ Yrs" leadership bench. However, the text says the firm began in February 2022 and the leadership has 75+ aggregate years.
  - The homepage also says "Est. 2026".
  - **Suggested Fix**: Use "Est. 2022 · SEBI-registered 2026", "₹300 Cr + ₹200 Cr greenshoe", and "75+ yrs" everywhere.

- **Wrong email and placeholder phone numbers**: 
  - The footer email is info@investright.com (single R), and the phone link dials +919876543210 while displaying 76000 82712.
  - On the Contact page, the email shows the correct spelling, but the mailto link still goes to investright.com.
  - The About page has a "Call +91 120 691 0000" button, which also looks like a placeholder.
  - **Action**: Fix these to accurate contact details to avoid losing enquiries.

- **Brand name is spelled five ways**: 
  - Iterations include "InvestRright", "Invest Rright", "Invest Right", "Investright", and "Investrright". 
  - Even on the Products page, the H1 says "Investright Infinity Growth Fund – I" and the card below says "Investrright".
  - **Action**: Use the exact names on your SEBI certificate and PPM everywhere. **Note**: Fund name is "InvestRight" and company name is "InvestRright", make changes accordingly.

- **Dead legal links**: 
  - Privacy Policy, Disclaimer, and Terms of Use all link to "#". 
  - **Action**: A real privacy policy is needed for DPDP compliance since the contact form collects names, emails, and phone numbers.

- **Blog is broken**: 
  - The blog is titled "Weekly Market Report", promises fund performance every week, and shows only "Loading...". 
  - **Action**: Either fix it or hide it. An empty insights page looks worse than having none.

- **Admin and Sales logins are public**: 
  - Client, Distributor, Sales, and Admin logins all appear in the public navigation. 
  - **Action**: Keep Client and Distributor. Move Admin and Sales to an unlisted URL (this is a security risk and bad optics).

- **Wrong eligibility checkbox**: 
  - The contact form asks the user to confirm they are an "accredited investor". Cat III eligibility is the ₹1 Cr minimum commitment, not accreditation. 
  - **Action**: Replace it with a note that the minimum investment is ₹1 Cr, plus a data-consent line.

- **Unverified performance claim**: 
  - The timeline says the self-funded strategy delivered ~50% YoY, with an asterisk but no footnote.
  - SEBI requires that wherever past AIF performance appears in marketing material or the PPM, the performance-versus-benchmark report from a benchmarking agency must be provided with it. Your prop-desk record isn't the AIF's record.
  - **Action**: Have Ultiwise Legal decide whether it can appear at all, and where.

### Smaller fixes:
- **Homepage market stats**: (8.5 lakh HNIs, ₹1.65T HNW wealth, ₹16.94T AIF commitments) have no sources. The HNW wealth figure being smaller than AIF commitments looks wrong. Cite a source for each figure or remove them.
- **"Moderate" risk tag**: On a leveraged long-short derivatives fund needs to match what your PPM risk factors say.
- **FAQ custodian naming**: The FAQ refers to "SEBI-registered custodians" generically. **Name ICICI Bank**.
- **Contact page address**: Shows only "Noida, Uttar Pradesh". Add the full Mindmill Tower address, the Jhansi and Vadodara offices, a map, and office hours.
- **Grammar fixes**: Fix grammar ("HNIs and family offices and corporates", "Every investment we execute, pass through").
- **Logo alt text**: Replace the old "Learn · Trade · Invest" tagline in the logo alt text.

---

## 2. Missing Regulatory Pages That Peers Have

- **Investor Charter and complaints data**: 
  - SEBI prepared an Investor Charter for AIFs covering services, grievance redressal, and investor responsibilities, and requires AIFs to compile investor complaint data in the prescribed format within 7 days of each quarter-end. 
  - **Action**: Add direct links on the homepage for Investor Charter, Stewardship Code, and complaint report.

- **Grievance redressal page**: 
  - Add a page explaining that investors can complain in writing, by phone, or in person, commits to resolving complaints within 21 calendar days, and gives dedicated service and compliance email IDs. 
  - Investors must also be told they can go to the ODR Portal if the manager doesn't resolve their grievance satisfactorily.
  - **Your page should include**:
    - Compliance Officer name and contact details
    - An escalation matrix
    - Links to SCORES and SMART ODR

- **A single "Disclosures" page**: 
  - Add a single page listing:
    - SEBI registration number and certificate
    - CIN and registered office
    - Sponsor, Manager, Trustee (Vistra ITCL), Custodian (ICICI Bank), RTA (Mudra), Auditor, Legal advisor
    - Principal Officer and Compliance Officer

- **Eligibility gate**: 
  - Many AIF sites show an "I am an eligible investor / this is not a solicitation" pop-up before fund details are visible. Since AIFs can raise money only by private placement, this is a sensible safeguard.

---

## 3. Missing Content That Would Help Conversions

- **Fund facts table**: 
  - Add a full table (currently only shows the ₹1 Crore minimum). It should look professional (refer to peer examples). Include:
    - Structure (open-ended)
    - Fees, hurdles, high-water mark
    - Exit load: 5% before 2 years, plus the waivers
    - Subscription and redemption frequency, notice period
    - Benchmark
    - Leverage limits
    - NAV frequency (SEBI charter requires monthly NAV disclosure for open-ended Cat III funds)
    - Service providers

- **Fee illustration or calculator**: 
  - Your fee model is unique, but no page explains it with numbers. 
  - **Action**: Add a simple "what you'd pay at 8%, 15% and 30% returns" table.

- **Tax note**: 
  - Cat III AIFs don't get pass-through status, and tax is paid at the fund level. HNIs will ask about this first.

- **How to invest**: 
  - Add the onboarding steps: KYC, FATCA/CRS, contribution agreement, PPM acknowledgement, drawdown. 
  - Also cover NRI eligibility and a document checklist.

- **Richer team profiles**: 
  - All profiles currently show initials instead of photos. 
  - **Action**: Add real photos, LinkedIn links, prior firms for each person, and certifications (e.g., NISM VIII, NISM XIX-C, CFA Level I which are currently not mentioned anywhere).

- **Governance section**: 
  - Show the investment committee, risk committee, and trustee oversight. Institutional investors look for this.

- **Distributor / Partner page**: 
  - You have a distributor login but no page explaining empanelment.

- **Other pages to add**:
  - Media and events, including coverage of the 11 Sep launch
  - Careers (hiring a Head of Sales)
  - Social links
  - Monthly newsletter sign-up

- **SEO**: 
  - Every page uses the same OG image, and the /blog title is "Weekly Market Report". Give each page its own image and title.

---

## 4. UI / Structural & Other Specific Changes

- **Fund vs Company Name**: Fund name is **InvestRight** and company name is **InvestRright**.
- **Visuals**:
  - Update the background image (to be provided).
  - Add image of team and description.
  - Remove the rotating logo.
  - Add in-house logos.
- **Tagline Update**: 
  - Replace "smarter investing, stronger tomorrow" to **"Long-short equity, built for every market."**
- **Header**: 
  - Keep the registration no. at the header, no need to keep it multiple times.
- **Navigation Menu Change**: 
  - Change to: **Fund · Strategy · Team · Insights · Contact**, plus Investor login.
- **Page Layout Additions**:
  - How the long-short strategy works (the animated explainer fits here)
  - Risk management framework
  - Leadership team with photos and credentials (crucial for HNI trust)
  - How to invest in steps (KYC -> PPM -> Contribution agreement -> Drawdown)
  - Service providers (trustee, custodian, RTA, auditor)
  - Insights and blog
  - A footer with disclaimers, grievance officer details, and the SEBI SCORES link.

*Note: Some items from the brief indicate specific elements to be removed or changed as of 2:02 AM - ensure these specific visual edits are done based on the wireframes or references provided.*
