function showSection(sectionId) {
  document.getElementById("respondent").style.display = "none";
  document.getElementById("claimant").style.display = "none";
  document.getElementById(sectionId).style.display = "block";
}

// Modal and accordion logic for case details
function openCaseDetail() {
  document.getElementById('case-detail-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
function closeCaseDetail() {
  document.getElementById('case-detail-modal').style.display = 'none';
  document.body.style.overflow = '';
}
// --- CASE DATA (from Google Sheet) ---
// Cases where India is the respondent state
const respondentCaseData = {
  'Indo Gold v. India': {
    'case-name': 'Indo Gold V India',
    'full-case-name': 'Indo Gold Pty Limited v. Republic of India',
    'case-number': 'PCA Case No. 2024-51',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '26 July 2024',
    'seat-of-arbitration': 'United Kingdom',
    'industries': 'Mining, Metal ores',
    'status-of-case': 'Pending',
    'claimant-country': 'Australia',
    'applicable-treaties': 'Australia - India BIT (1999)',
    'administering-institution': 'Permanent Court of Arbitration',
    'state-gov-involved': 'Rajasthan',
    'parties-claimant': 'Mr. Mark Bolton<br>Indo Gold Pty Limited<br><br>Mr. Ben Juratowitch KC<br>Essex Court Chambers<br><br>Ms. Belinda McRae<br>Twenty Essex Chambers<br><br>Ms. Callista Harris<br>7 Wentworth Selborne<br><br>Mr. Wade Coriell<br>Mr. Aloysius Llamzon<br>Mr. Thomas Sprange KC<br>Mr. Sajid Ahmed<br>Mr. Harry Burnett<br>Ms. Jessica Beess und Chrostin<br>Mr. Timothy McKenzie<br>Ms. Vivasvat Dadwal<br>Ms. Medhavi Singh<br>King & Spalding LLP',
    'parties-respondent': 'Mr. V. L. Kantha Rao, Secretary<br>Ministry of Mines<br>Secretary, Department of Economic Affairs<br>Ministry of Finance<br>Law Secretary, Department of Legal Affairs<br>Ministry of Law and Justice<br>Foreign Secretary<br>Ministry of External Affairs<br>Secretary<br>Ministry of Corporate Affairs<br>Mr. Anand S. Pathak<br>Mr. Nabik Syam<br>Mr. Vijay Purohit<br>Ms. Ramya Raman<br>Mr. Shivam Dwivedi<br>Ms. Shyra Hoon<br>Mr. Tanmay Arora<br>P&A Law Offices<br>Dr. Markus Burgstaller<br>Mr. Scott Macpherson<br>Ms. Iris Sauvagnac<br>Mr. Dmytro Galagan<br>Hogan Lovells International LLP',
    'tribunal-composition': 'President<br>Fernández-Armesto, J.<br>Arbitrator<br>Appointed by claimant<br>Alexandrov, S. A.<br>Arbitrator<br>Appointed by/designated to respondent<br>Rao, L. N.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Investment in the Bhukia gold mining project in Rajasthan through wholly-owned local subsidiary Metal Mining Pvt Ltd.<br>Summary of the dispute<br>Claims arising out of local authorities’ rejection of the prospecting licence application made by Metal Mining Pvt Ltd for the Bhukia mining project.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'London Stock Exchange Filing of Panthera Resources Plc on Claim for Damages Amounting to US$1.58 billion - 19 May 2025',
    'other-documents': 'London Stock Exchange Filing of Panthera Resources Plc on Conditional Agreement on Arbitration Funding - 28 Feb 2023<br>London Stock Exchange Filing of Panthera Resources Plc on Arbitration Funding Confirmation Notice - 25 Aug 2023<br>London Stock Exchange Filing of Panthera Resources Inc. on the Rajasthan High Court Decision - 27 Sept 2023<br>London Stock Exchange Filing of Panthera Resources Plc on Issuance of Notice of Dispute - 2 Jan 2024<br>London Stock Exchange Filing of Panthera Resources Plc on Update on Dispute with India - 2 Apr 2024<br>Request for Arbitration - 26 July 2024<br>London Stock Exchange Filing of Panthera Resources Plc on Issuance of Notice of Arbitration - 26 July 2024<br>London Stock Exchange Filing of Panthera Resources Plc on Arbitration Update - 10 Jan 2025<br>London Stock Exchange Filing of Panthera Resources Plc on Arbitration Update - 29 Jan 2025',
    'background-scores': '<a href="https://www.londonstockexchange.com/news-article/PAT/arbitration-update/16847015" target="_blank" rel="noopener noreferrer">https://www.londonstockexchange.com/news-article/PAT/arbitration-update/16847015</a>'
  },
  'Vedanta v. India (II)': {
    'case-name': 'Vedanta V India (II)',
    'full-case-name': 'Vedanta Resources Limited v. The Republic of India (II)',
    'case-number': 'PCA Case No. 2024-43',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '22 Oct 2024',
    'seat-of-arbitration': 'Switzerland',
    'industries': 'Mining',
    'status-of-case': 'Pending',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'Permanent Court of Arbitration',
    'state-gov-involved': 'Tamil Nadu',
    'parties-claimant': 'Ms. Marie Stoyanov (from 22 May 2025)<br><br>Mr. Igor Kirillov (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (Paris)<br><br>Ms. Sheila Ahuja KC (from 22 May 2025)<br><br>Mr. Amrutanshu Dash (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (Singapore)<br><br>Mr. Arun Mal (from 22 May 2025)<br><br>Mr. Sahil Malhotra (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (London)<br><br>Mr. Curtis Fung (from 22 May 2025)<br><br>Allen Overy Shearman Sterling (Hong Kong SAR)<br><br>Mr. Sanjeev Kapoor<br>Ms. Saman Ahsan<br>Khaitan & Co<br><br>Ms. Faith Gay (until 11 February 2025)<br>Mr. Rajat Rana (until 11 February 2025)<br>Mr. Manuel Valderrama (until 11 February 2025)<br>Mr. Joshua W. Bean (until 11 February 2025)<br>Selendy Gay PLLC (until 11 February 2025)',
    'parties-respondent': 'Mr. Atul Sharma<br>Mr. Shravan Yammanur<br>Mr. Mangesh Krishna<br>Ms. Prachi Kaushik<br>Dentons Link Legal<br><br>Mr. James Langley<br>Ms. Catherine Gilfedder<br>Dr. Lorna MacFarlane<br>Ms. Olivia Lee-Smith<br>Dentons UK and Middle East LLP',
    'tribunal-composition': 'President<br>Reinisch, A.<br>Arbitrator<br>Appointed by claimant<br>Reichert, K.<br>Arbitrator<br>Appointed by/designated to respondent<br>Ramasubramanian, V.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://globalarbitrationreview.com/article/vedanta-brings-new-treaty-claim-against-india" target="_blank" rel="noopener noreferrer">https://globalarbitrationreview.com/article/vedanta-brings-new-treaty-claim-against-india</a>'
  },
  'Devas v. India (II)': {
    'case-name': 'Devas V India (II)',
    'full-case-name': 'CC/Devas (Mauritius) Ltd., Telcom Devas Mauritius Limited, and Devas Employees Mauritius Private Limited v. Republic of India (II)',
    'case-number': 'PCA Case No. 2022-34',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2 Feb 2022',
    'seat-of-arbitration': 'London',
    'industries': 'Telecommunication, Wireless communication activities',
    'status-of-case': 'Pending',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'Permanent Court of Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Mr. Jim Fleming<br>Mr. Arun Gupta<br>Mr. Rajendra Singh<br>Mr. Serge Martin<br>Mr. Ramachandran Viswanathan<br>Mr. Lawrence Babbio<br><br>CC/Devas (Mauritius) Ltd,. <br><br>Telcom Devas Mauritius Limited<br><br>Devas Employees Mauritius Private Limited<br><br>Mr. Rahim Moloo<br>Mr. Matthew D. McGill<br>Ms. Ankita Ritwik<br>Ms. Alexa Romanelli<br>Mr. Praharsh Johorey<br>Gibson, Dunn & Crutcher LLP',
    'parties-respondent': 'Her Excellency Ms. Reenat Sandhu, Ambassador of India to the Kingdom of the Netherlands<br>Ms. K.C. Sowmya, Counsellor (Legal)<br>Embassy of India, The Hague, The Netherlands<br><br>Mr. Abhishek Singh, Joint Secretary (ED)<br>Mr. Siddharth Malik, Director (ED)<br>Mr. George Pothan Poothicote, Legal Consultant<br>Mr. Arpit Mallick, Consultant (Legal)<br>Ms. Sindhu K Acharya, Consultant (Legal)<br>Ministry of External Affairs<br><br>Smt. Sandhya Venugopal Sharma, Additional Secretary<br>Dr. M. Subramanyam, Joint Secretary<br>Mr. M. S. Krishnan, Officer on Special Duty<br>Department of Space<br><br>Ms. Reetu Jain, Economic Adviser, Investment Division<br>Ms. Supriya Anand, Deputy Director, Investment Division<br>Department of Economic Affairs<br><br>Dr. Niten Chandra, Law Secretary<br>Dr. Rajiv Mani, Additional Secretary<br>Dr. R.J.R. Kasibhatla, Additional Legal Adviser<br>Departament of Legal Affairs<br><br>Legal Counsel<br><br>Ms. Melanie Van Leeuwen<br>Mr. Stijn Wilbers<br>Mr. David Lee<br>Vanguard International Dispute Resolution',
    'tribunal-composition': 'President<br>Zuleta, E.<br>Arbitrator<br>Appointed by claimant<br>Schill, S.<br>Arbitrator<br>Appointed by/designated to respondent<br>Raghuram, G.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Judgment of the High Court of Justice of England and Wales [2025] EWHC 1738 - 9 July 2025',
    'other-documents': 'Procedural Order No. 7 (Rejecting India\'s Request to Stay the Arbitration) - 22 Mar 2025<br>Dissent of Goda Raghuram<br>Procedural Order No. 6 (Declining to Recognise the Authority of the Administrator for the Purposes of the Arbitration) - 3 Jan 2025<br>Interim Award - 10 Mar 2023<br>Order of the Supreme Court of Mauritius - 12 Jan 2023',
    'background-scores': '<a href="https://jusmundi.com/en/document/other/en-cc-devas-mauritius-ltd-telcom-devas-mauritius-limited-and-devas-employees-mauritius-private-limited-v-republic-of-india-notice-of-arbitration-wednesday-2nd-february-2022" target="_blank" rel="noopener noreferrer">https://jusmundi.com/en/document/other/en-cc-devas-mauritius-ltd-telcom-devas-mauritius-limited-and-devas-employees-mauritius-private-limited-v-republic-of-india-notice-of-arbitration-wednesday-2nd-february-2022</a>'
  },
  'Earlyguard v. India': {
    'case-name': 'Earlyguard v. India',
    'full-case-name': 'Earlyguard Limited v. India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'Data Not Available',
    'respondent-field': 'India',
    'date-of-introduction': '17 Feb 2021',
    'seat-of-arbitration': 'Data Not Available',
    'industries': 'Financial Services, Other non-bank financial institutions',
    'status-of-case': 'Settled',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'United Kingdom - India BIT (1994)',
    'administering-institution': 'Data Not Available',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Data Not Available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded through settlement<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://www.mitsui.com/jp/en/topics/2021/1242452_12171.html" target="_blank" rel="noopener noreferrer">https://www.mitsui.com/jp/en/topics/2021/1242452_12171.html</a>'
  },
  'GPIX v. India': {
    'case-name': 'GPIX v. India',
    'full-case-name': 'GPIX LLC v. The Republic of India',
    'case-number': 'PCA Case No. 2020-36',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '9 Mar 2020',
    'seat-of-arbitration': 'London',
    'industries': 'Aviation, Airport management',
    'status-of-case': 'Decided in favor of State',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Ms. Sylvia Noury<br>Mr. Peter Turner QC<br>Ms. Ella Davies<br>Ms. Annie Pan<br>Ms. Alexandra van der Meulen<br>Ms. Danielle Jooste<br>Mr. Rohit Bhat<br>Ms. Marina Mayer<br>Mr. Caspar Everett<br>Ms. Stephanie Mbonu<br>FRESHFIELDS BRUCKHAUS DERINGER<br>(London, United Kingdom)<br><br>Mr. Amit Sibal<br>Senior Advocate<br>SUPREME COURT OF INDIA<br>(New Delhi, India)<br><br>Mr. Aman Ahluwalia',
    'parties-respondent': 'Her Excellency Ms. Reenat Sandhu<br>Ambassador of India<br>to the Kingdom of Netherlands<br>Ms. K.C. Sowmya<br>First Secretary Legal<br>EMBASSY OF INDIA<br>(The Hague, the Netherlands)<br><br>Smt. Rubina Ali<br>Joint Secretary<br>Shri Joyanto Chakraborty<br>Director<br>Shri Narendra Singh<br>Deputy Secretary<br>MINISTRY OF CIVIL AVIATION<br><br>Shri I.N. Murthy<br>Member (Operations)<br>Shri A.K. Rai<br>General Manager (Operations)<br>AIRPORTS AUTHORITY OF INDIA<br><br>Ms. Reetu Jain<br>Economic Advisor<br>Ms. Preeti Jain<br>Director<br>Ms. Supriya Anand<br>Deputy Director<br>Mr. Shivam Dwivedi<br>Legal Consultant<br>DEPARTMENT OF ECONOMIC AFFAIRS<br>MINISTRY OF FINANCE<br><br>Shri Anoop Kumar Mendiratta<br>Law Secretary<br>Dr. R.J.R. Kasibhatla<br>Dy. Legal Adviser<br>DEPARTMENT OF LEGAL AFFAIRS<br><br>Md. Noor Rahman Sheikh<br>Joint Secretary (Economic Diplomacy)<br>Smt. Uma Sekhar<br>Additional Secretary (Legal and Treaties)<br>Shri George Pothan Poothicote<br>Legal Consultant<br>MINISTRY OF EXTERNAL AFFAIRS<br><br>Mr. Anand S. Pathak<br>Mr. Nabik Syam<br>Ms. Ramya Raman<br>Mr. Surya Kapoor<br>Ms. Shyra Hoon<br>Mr. Nav Dhawan<br>P&A LAW OFFICES<br>(New Delhi, India)<br><br>Dr. Markus Burgstaller<br>Mr. Matthew Knowles<br>Mr. Scott Macpherson<br>Ms. Iris Sauvagnac<br>Mr. Dmytro Galagan<br>HOGAN LOVELLS INTERNATIONAL LLP<br>(London, United Kingdom)',
    'tribunal-composition': 'President<br>Jones, D.<br>Arbitrator<br>Appointed by claimant<br>Blanch, J.<br>Arbitrator<br>Appointed by/designated to respondent<br>Sikri, A. K.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>None - all claims dismissed at the merits stage',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://pca-cpa.org/en/cases/256/" target="_blank" rel="noopener noreferrer">https://pca-cpa.org/en/cases/256/</a>'
  },
  'Maxis and Global Communications v. India': {
    'case-name': 'Maxis and Global Communications v. India',
    'full-case-name': 'Maxis Communications Berhad and Global Communications Services Holdings Limited v. Republic of India',
    'case-number': 'PCA Case No. 2021-38',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2021',
    'seat-of-arbitration': 'London',
    'industries': 'Telecommunication, Wireless communication activities',
    'status-of-case': 'Pending',
    'claimant-country': 'Malaysia , Mauritius',
    'applicable-treaties': 'India - Malaysia BIT (1995)<br>India - Mauritius BIT (1998)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Mr. Toby Landau KC<br>Duxton Hill Chambers<br><br>Mr. Lucas Bastin KC<br>Ms. Jackie McArthur<br>Ms. Naomi Hart<br>Ms. Gretta Schumacher<br>Essex Court Chambers<br><br>Ms. Zahra Al-Rikabi<br>Brick Court Chambers<br><br>Ms. Courtney Grafton<br>Twenty Essex<br><br>Mr. Peh Aik Hin<br>Ms. Chua Xinying<br>Ms. Rebecca Chia<br>Ms. Abigail Fernandez<br>Allen & Gledhill LLP<br><br>Mr. Vyapak Desai<br>Mr. Alipak Banerjee<br>Nishith Desai Associates',
    'parties-respondent': 'Mr. Gulzar Natarajan, Additional Secretary (T)<br>Mr. Ashok Kumar Jain, Deputy Director General (IP)<br>Mr. Alok Ranjan, Director (IP)<br>Mr. Amit Upadhayay, Under Secretary (IP)<br>Department of Telecommunication<br>Ministry of Communications<br>Government of India<br><br>H.E. Mr. Kumar Tuhin, Ambassador of India to the Kingdom of the Netherlands<br>Ms. K.C. Sowmya, Counsellor (Legal) Embassy of India, The Hague<br>Embassy of India<br>The Hague, The Netherlands<br><br>Mr. Abhishek Singh, Joint Secretary<br>Ms. Manisha Swami, Director<br>Ms. Sindhu Acharya, Consultant (Legal)<br>Mr. Noble Robinson, Consultant (legal)<br>Ministry of External Affairs<br>Government of India<br><br>Ms. Reetu Jain, Economic Adviser<br>Mr. Dhruv Chakravarty, Director<br>Ms. Trishla Singh, Assistant Director<br>Mr. Arpit Mallick, Legal Consultant<br>Department of Economic Affairs<br>Ministry of Finance<br>Government of India<br><br>Dr. Rajiv Mani, Law Secretary<br>Dr. R J R Kasibhatla, Additional Legal Adviser<br>Department of Legal Affairs<br>Ministry of Law and Justice<br>Government of India<br><br>Dr. Constantinos Salonidis<br>Ms. Christina Beharry<br>Mr. Lawrence H. Martin<br>Mr. Sudhanshu Roy<br>Ms. Katherine Peiffer<br>Ms. Ivana Mariles Toledo<br>Ms. Rumbidzai Maweni<br>Mr. Pablo Nilo Donoso<br>Foley Hoag LLP<br>Washington, D.C.<br><br>Mr. Daniel Schimmel<br>Ms. Eva Paloma Treves<br>Foley Hoag LLP<br>New York<br><br>Mr. Suhaan Mukerji<br>Ms. Chitralekha Das<br>Mr. Harsh Hiroo Gursahani<br>Mr. Jibran Khan<br>Mr. Sayandeep Pahari<br>PLR Chambers<br>New Delhi',
    'tribunal-composition': 'President<br>Mance, J.<br>Arbitrator<br>Appointed by claimant<br>King, B. D.<br>Arbitrator<br>Appointed by/designated to respondent<br>Douglas, Z.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://pca-cpa.org/en/cases/313/" target="_blank" rel="noopener noreferrer">https://pca-cpa.org/en/cases/313/</a>'
  },
  'Kowepo v. India': {
    'case-name': 'Kowepo v. India',
    'full-case-name': 'Korea Western Power Company Limited v. India',
    'case-number': 'PCA Case No. 2020-06',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '29 Nov 2019',
    'seat-of-arbitration': 'Singapore',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Pending',
    'claimant-country': 'South Korea',
    'applicable-treaties': 'India - Korea, Republic of BIT (1996)<br>India - Korea, Republic of CEPA (2009)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Mr. Doo-Sik Kim<br>Mr. Jae Min Jeon<br>Mr. Youngwon Yoon<br>Mr. Rockey Yoo<br>Mr. Arie Eernisse<br>Mr. Jae Hee Kim<br>Mr. Jung Hoon Yang<br>Shin & Kim<br><br>Dr. Rishab Gupta<br>Twenty Essex<br><br>Ms. Shreya Jain<br>Shardul Amarchand Mangaldas & Co.',
    'parties-respondent': 'Mr. Anand S. Pathak<br>Mr. Nabik Syam<br>Ms. Ramya Raman<br>Mr. Surya Kapoor<br>Ms. Shyra Hoon<br>Mr. Nav Dhawan<br>P&A LAW OFFICES<br>(New Delhi, India)<br><br>Mr. Dany Khayat<br>Mr. José Caicedo<br>Mr. William Ahern<br>Ms. Joy Kreidi<br>Mr. Bastien Tirel<br>Mr. Aslan Boucobza<br>Mayer Brown',
    'tribunal-composition': 'President<br>Kalicki, J. E.<br>Arbitrator<br>Appointed by claimant<br>Stern, B.<br>Arbitrator<br>Appointed by/designated to respondent<br>Hobér, K.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Shareholding of 40% in Pioneer Gas Power Plant Limited (PGPL), the operator of a 388 MW project in the Raigad district in the Indian state of Maharashtra.<br>Summary of the dispute',
    'amount-of-compensation': 'Claimed by investor<br>400.00 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://pca-cpa.org/en/cases/272/" target="_blank" rel="noopener noreferrer">https://pca-cpa.org/en/cases/272/</a>'
  },
  'Carissa v. India': {
    'case-name': 'Carissa v. India',
    'full-case-name': 'Carissa Investments LLC v. India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2017',
    'seat-of-arbitration': 'N/A',
    'industries': 'Real Estate',
    'status-of-case': 'Withdrawn',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Telangana',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>McLachlan, C. A.<br>Arbitrator<br>Appointed by claimant<br>Hobér, K.<br>Arbitrator<br>Appointed by/designated to respondent<br>Douglas, Z.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>50.00 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="https://timesofindia.indiatimes.com/india/mauritius-drags-india-to-international-court-over-andhra-sez-case/articleshow/63021815.cms" target="_blank" rel="noopener noreferrer">https://timesofindia.indiatimes.com/india/mauritius-drags-india-to-international-court-over-andhra-sez-case/articleshow/63021815.cms</a>'
  },
  'Nissan v. India': {
    'case-name': 'Nissan v. India',
    'full-case-name': 'Nissan Motor Co., Ltd. v. Republic of India',
    'case-number': 'PCA Case No. 2017-37',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '23 Feb 2017',
    'seat-of-arbitration': 'Singapore',
    'industries': 'Automotive, Manufacturing of automotive',
    'status-of-case': 'Settled',
    'claimant-country': 'Japan',
    'applicable-treaties': 'India - Japan EPA (2011)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'Tamil Nadu',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>Kalicki, J. E.<br>Arbitrator<br>Appointed by claimant<br>Hobér, K.<br>Arbitrator<br>Appointed by/designated to respondent<br>Khehar, J. S.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Umbrella clause<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>70 per cent share in Renault Nissan Automotive India Private Limited, a consortium that built an industrial automotive facility in Chennai, the capital of Tamil Nadu.<br>Summary of the dispute<br>Claims arising out of non-payment of incentives by the Indian State government of Tamil Nadu, which had been allegedly promised to the claimant under the agreement for building of a car plant, signed with the State government in 2008.',
    'amount-of-compensation': 'Claimed by investor<br>660.00 mln USD<br>Awarded through settlement<br>Data not available',
    'latest-documents': 'Judgment of the High Court of Singapore [2019] SGHC 249 - 18 Oct 2019',
    'other-documents': 'Decision on Jurisdiction - 29 Apr 2019',
    'background-scores': '<a href="https://in.reuters.com/article/nissan-india-arbitration/exclusive-nissan-sues-india-over-outstanding-dues-seeks-over-770-million-idINKBN1DV3N5" target="_blank" rel="noopener noreferrer">https://in.reuters.com/article/nissan-india-arbitration/exclusive-nissan-sues-india-over-outstanding-dues-seeks-over-770-million-idINKBN1DV3N5</a>'
  },
  'Vodafone v. India (II)': {
    'case-name': 'Vodafone v. India (II)',
    'full-case-name': 'Vodafone Group Plc and Vodafone Consolidated Holdings Limited v. India (II)',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '24 Jan 2017',
    'seat-of-arbitration': 'N/A',
    'industries': 'Telecommunication, Waste management',
    'status-of-case': 'Unknown',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>McLachlan, C. A.<br>Arbitrator<br>Appointed by claimant<br>Kaplan, N.<br>Arbitrator<br>Appointed by/designated to respondent<br>Kohen, M. G.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Ownership of an Indian telecoms company.<br>Summary of the dispute<br>Claims arising out of a retrospective transaction tax imposed by the Government over claimants\' acquisition of Indian-based Hutchison Whampoa telecoms business.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Judgment of the High Court of Delhi - 7 May 2018',
    'other-documents': 'Order of the High Court of Delhi - 26 Oct 2017<br>Judgment of the High Court of Delhi - 22 Aug 2017.',
    'background-scores': '<a href="https://www.law360.com/articles/924460/vodafone-kicks-off-2nd-tax-arbitration-against-india" target="_blank" rel="noopener noreferrer">https://www.law360.com/articles/924460/vodafone-kicks-off-2nd-tax-arbitration-against-india</a>'
  },
  'Astro and South Asia Entertainment v. India': {
    'case-name': 'Astro and South Asia Entertainment v. India',
    'full-case-name': 'Astro All Asia Networks and South Asia Entertainment Holdings Limited v. India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': 'Data Not Available.',
    'seat-of-arbitration': 'Data Not Available.',
    'industries': 'Information and communicatio, Telecommunication',
    'status-of-case': 'Data Not Available',
    'claimant-country': 'United Kingdom<br>Mauritius',
    'applicable-treaties': 'India - United Kingdom BIT (1994)<br>India - Mauritius BIT (1998)',
    'administering-institution': 'Data Not Available',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Arbitrator<br>Appointed by claimant<br>Leaver, P.<br>President<br>Moser, M. J.<br>Arbitrator<br>Appointed by/designated to respondent<br>Reed, L.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Investment in the Indian satellite TV company Sun Direct.<br>Summary of the dispute<br>Claims arising out of an allegedly unfair and biased criminal investigation by the Government relating to the suspected bribery by the claimants of Indian government officials.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://economictimes.indiatimes.com/industry/media/entertainment/media/mauritius-firm-serves-arbitration-notice-on-sun-tv-case/articleshow/51295644.cms" target="_blank" rel="noopener noreferrer">http://economictimes.indiatimes.com/industry/media/entertainment/media/mauritius-firm-serves-arbitration-notice-on-sun-tv-case/articleshow/51295644.cms</a>'
  },
  'RAKIA v. India': {
    'case-name': 'RAKIA v. India',
    'full-case-name': 'Ras-AI-Khaimah Investment Authority v. India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '8 Dec 2016',
    'seat-of-arbitration': 'London',
    'industries': 'Metal, Manufacturing of basic metals',
    'status-of-case': 'Decided in favor of State, United Arab Emirates',
    'claimant-country': 'United Arab Emirates',
    'applicable-treaties': 'India - United Arab Emirates BIT (2013)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Andhra Pradesh',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>Hoffmann, L.<br>Arbitrator<br>Appointed by claimant<br>Rowley, J. W.<br>Arbitrator<br>Appointed by/designated to respondent<br>Prasad, C. K.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>None - jurisdiction declined',
    'summary': 'Data Not Available',
    'amount-of-compensation': 'Claimed by investor<br>44.71 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Judgment of the High Court of Justice of England and Wales [2025] EWHC 1553 - 20 June 2025',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://timesofindia.indiatimes.com/city/visakhapatnam/AP-govt-cancels-bauxite-supply-deal-with-Anrak/articleshow/51752189.cms" target="_blank" rel="noopener noreferrer">http://timesofindia.indiatimes.com/city/visakhapatnam/AP-govt-cancels-bauxite-supply-deal-with-Anrak/articleshow/51752189.cms</a>'
  },
  'Vedanta v. India (I)': {
    'case-name': 'Vedanta v. India (I)',
    'full-case-name': 'Vedanta Resources PLC v. The Republic of India (I)',
    'case-number': 'PCA Case No. 2016-05',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2016',
    'seat-of-arbitration': 'Singapore',
    'industries': 'Energy - Oil & Gas, Exploration, extraction and production (upstream)',
    'status-of-case': 'Settled',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Ms. Marie Stoyanov (from 22 May 2025)<br><br>Mr. Igor Kirillov (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (Paris)<br><br>Ms. Sheila Ahuja KC (from 22 May 2025)<br><br>Mr. Amrutanshu Dash (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (Singapore)<br><br>Mr. Arun Mal (from 22 May 2025)<br><br>Mr. Sahil Malhotra (from 22 May 2025)<br><br>Allen Overy Shearman Sterling LLP (London)<br><br>Mr. Curtis Fung (from 22 May 2025)<br><br>Allen Overy Shearman Sterling (Hong Kong SAR)<br><br>Mr. Sanjeev Kapoor<br>Ms. Saman Ahsan<br>Khaitan & Co<br><br>Ms. Faith Gay (until 11 February 2025)<br>Mr. Rajat Rana (until 11 February 2025)<br>Mr. Manuel Valderrama (until 11 February 2025)<br>Mr. Joshua W. Bean (until 11 February 2025)<br>Selendy Gay PLLC (until 11 February 2025)',
    'parties-respondent': 'Mr. Atul Sharma<br>Mr. Shravan Yammanur<br>Mr. Mangesh Krishna<br>Ms. Prachi Kaushik<br>Dentons Link Legal<br><br>Mr. James Langley<br>Ms. Catherine Gilfedder<br>Dr. Lorna MacFarlane<br>Ms. Olivia Lee-Smith<br>Dentons UK and Middle East LLP',
    'tribunal-composition': 'President. Hwang, M.<br>Arbitrator<br>Appointed by claimant<br>Spigelman, J.<br>Arbitrator<br>Appointed by/designated to respondent<br>McRae, D. M.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>59.9% shareholding in Cairn India Limited, one of the largest oil and gas exploration companies in India.<br>Summary of the dispute<br>Claims arising out of a tax bill of approximately USD 3.29 billion, imposed by the Government on Cairn India Limited in 2015, for the alleged failure to pay taxes on capital gains arising from Cairn’s operations in 2006-2007.',
    'amount-of-compensation': 'Claimed by investor<br>3000.00 mln USD<br>Awarded through settlement<br>Data not available',
    'latest-documents': 'Press Release of Vedanta Resources on Settlement of the Arbitration - 13 Dec 2021',
    'other-documents': 'Judgment of the Court of Appeal of Singapore [2021] SGCA 50 - 12 May 2021<br>Judgment of the High Court of Singapore [2020] SGHC 208 - 8 Oct 2020.<br>Press Release of Vedanta Resources on Notice of Claim Under Bilateral Investment Treaty - 27 Mar 2015.',
    'background-scores': '<a href="https://www.cairnindia.com/sites/default/files/press_releases/2015-03-27_RNS_VED%20_BIT-Claim.pdf" target="_blank" rel="noopener noreferrer">https://www.cairnindia.com/sites/default/files/press_releases/2015-03-27_RNS_VED%20_BIT-Claim.pdf</a>'
  },
  'Cairn v. India': {
    'case-name': 'Cairn v. India',
    'full-case-name': 'Cairn Energy PLC and Cairn UK Holdings Limited v. The Republic of India',
    'case-number': 'PCA Case No. 2016-7',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '22 Dec 2015',
    'seat-of-arbitration': 'The Hague',
    'industries': 'Energy - Oil & Gas, Exploration, extraction and production (upstream)',
    'status-of-case': 'Decided in favor of investor',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Quinn Emanuel Urquhart & Sullivan LLP<br>Shepherd and Wedderburn LLP<br>Mr. Arvind Datar SA<br>S&R Associates<br>Platinum Partners',
    'parties-respondent': 'Aarna Law<br>Mr. Salim Moollan QC<br>Mr. Gourab Banerji SA<br>Professor Chester Brown',
    'tribunal-composition': 'President<br>Lévy, L.<br>Arbitrator<br>Appointed by claimant<br>Alexandrov, S. A.<br>Arbitrator<br>Appointed by/designated to respondent<br>Thomas, J. C.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Direct expropriation<br><br>Indirect expropriation<br><br>Transfer of funds<br>IIA breaches found<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Direct expropriation<br><br>Indirect expropriation<br><br>Transfer of funds',
    'summary': 'Details of investment<br>Interests in subsidiary Cairn UK Holdings Limited and 10 per cent shareholding in Cairn India Limited (CIL), one of the largest oil and gas exploration companies in India.<br>Summary of the dispute<br>Claims arising out of a draft assessment order issued by the Indian Income Tax Department addressed to the claimant’s subsidiary, Cairn UK Holdings Limited, in respect of fiscal year 2006/7 in the amount of USD 1.6 billion plus any applicable interest and penalties; and the alleged prohibition for the claimant to sell its 10 per cent shareholding in Cairn India Limited.',
    'amount-of-compensation': 'Claimed by investor<br>5584.39 mln USD<br>Awarded by tribunal<br>1232.82 mln USD',
    'latest-documents': 'Hague Court of Appeal Judgment (Dutch Original).<br>Hague Court of Appeal Judgment (Unofficial English Translation)',
    'other-documents': 'Final Award<br>Judgment of the High Court of Singapore<br>Procedural Order No. 16<br>Procedural Order No. 4 - Decision on the Respondent’s Application for Bifurcation<br>Procedural Order No. 3 - Decision on the Respondent’s Application for a Stay of the Proceedings<br>Decision of India\'s Income Tax Appellate Tribunal<br>Procedural Order No. 2.<br>Claimant\'s Press Release on the Notice of Dispute',
    'background-scores': '<a href="http://articles.economictimes.indiatimes.com/2016-01-19/news/69900471_1_cairn-india-ltd-simon-thomson-cairn-energy" target="_blank" rel="noopener noreferrer">http://articles.economictimes.indiatimes.com/2016-01-19/news/69900471_1_cairn-india-ltd-simon-thomson-cairn-energy</a>'
  },
  'LDA v. India': {
    'case-name': 'LDA v. India',
    'full-case-name': 'Louis Dreyfus Armateurs SAS v. The Republic of India',
    'case-number': 'PCA Case No. 2014-26',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '31 Mar 2014',
    'seat-of-arbitration': 'London',
    'industries': 'Land Transportation, Logistics & Storage<br>Warehousing and support activities for transportation',
    'status-of-case': 'Decided in favor of State',
    'claimant-country': 'France',
    'applicable-treaties': 'France - India BIT (1997)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'West Bengal',
    'parties-claimant': 'Professor Vaughan Lowe QC<br>ESSEX COURT CHAMBERS<br>(London, United Kingdom)<br><br>Dr. Tariq Baloch<br>3 VERULAM BUILDINGS, GRAY’S INN<br>(London, United Kingdom)<br><br>Mr. Farhad Sorabjee<br>Mr. Varghese Thomas<br>Ms. Arti Raghavan<br>Ms. Shanaya Irani<br>Ms. Neeraja Balakrishnan<br>J. SAGAR ASSOCIATES<br>(Mumbai, India)',
    'parties-respondent': 'Mr. Mark A. Clodfelter<br>Dr. Constantinos Salonidis<br>Mrs. Diana Tsutieva<br>Ms. Oonagh Sands<br>Mr. Ofilio Mayorga<br>Mr. Joseph Klingler<br>FOLEY HOAG LLP (Washington D.C., U.S.A.)<br>Mr. Thomas Bevilacqua<br>Dr. Alejandra Torres Camprubi<br>Mr. Antoine Lerosier<br>FOLEY HOAG AARPI (Paris, France)',
    'tribunal-composition': 'President<br>Kalicki, J. E.<br>Arbitrator<br>Appointed by claimant<br>Lew, J. D. M.<br>Arbitrator<br>Appointed by/designated to respondent<br>Thomas, J. C.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Full protection and security, or similar<br>IIA breaches found<br>None - all claims dismissed at the merits stage',
    'summary': 'Details of investment<br>Shareholding in a joint venture with Indian port operator ABG Infralogistics to implement a project aimed at the mechanisation of berths at Haldia in West Bengal.<br>Summary of the dispute<br>Claims arising out of a series of measures by the Indian Government that allegedly prevented the effective implementation of a joint venture related to a port modernization project at Haldia, in the city of Kolkota, in which the claimant held stakes; including allegedly failing to provide protection and security to the project, and to obey court orders concerning the removal of equipment from the port.',
    'amount-of-compensation': 'Claimed by investor<br>36.00 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Award - 11 Sept 2018',
    'other-documents': 'Decision on Jurisdiction - 22 Dec 2015',
    'background-scores': '<a href="http://www.pcacases.com/web/view/113" target="_blank" rel="noopener noreferrer">http://www.pcacases.com/web/view/113</a>'
  },
    'Vodafone v. India (I)': {
    'case-name': 'Vodafone v. India (I)',
    'full-case-name': 'Vodafone International Holdings BV v. India (I)',
    'case-number': 'PCA Case No. 2016-35',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '17 Apr 2014',
    'seat-of-arbitration': 'Singapore',
    'industries': 'Telecommunication, Wired communication activities',
    'status-of-case': 'Decided in favor of investor',
    'claimant-country': 'Netherlands',
    'applicable-treaties': 'India - Netherlands BIT (1995)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Arbitrator<br>Appointed by claimant<br>Fortier, L. Y.<br>Arbitrator<br>Appointed by/designated to respondent<br>Lahoti, R. C. (replaced)<br>Arbitrator<br>Appointed by/designated to respondent<br>Oreamuno Blanco, R.<br>President<br>Berman, F.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br>IIA breaches found<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br>Follow-on proceedings',
    'summary': 'Details of investment<br>Ownership of an Indian telecoms company.<br>Summary of the dispute<br>Claims arising out of a retrospective transaction tax imposed by the Government over claimant\'s acquisition of Indian-based Hutchison Whampoa telecoms business.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Non-pecuniary relie',
    'latest-documents': 'Final Award (Operative Part) - 25 Sept 2020',
    'other-documents': 'Judgment of the High Court of Delhi Vacating Order - 7 May 2018<br>Indian Supreme Court Order - 14 Dec 2017<br>Order of the High Court of Delhi - 26 Oct 2017<br>Judgment of the High Court of Delhi Restraining the Claimant from Proceeding with Its Arbitration Claim - 22 Aug 2017',
    'background-scores': '<a href="http://articles.economictimes.indiatimes.com/2014-08-26/news/53243667_1_third-arbitrator-india-netherlands-bipa-vodafone" target="_blank" rel="noopener noreferrer">http://articles.economictimes.indiatimes.com/2014-08-26/news/53243667_1_third-arbitrator-india-netherlands-bipa-vodafone</a>'
  },
  'Deutsche Telekom v. India': {
    'case-name': 'Deutsche Telekom v. India',
    'full-case-name': 'Deutsche Telekom AG v. The Republic of India',
    'case-number': 'PCA Case No. 2014-10',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2 Sept 2013',
    'seat-of-arbitration': 'Geneva',
    'industries': 'Telecommunication, Wireless communication activities',
    'status-of-case': 'Decided in favor of investor',
    'claimant-country': 'Germany',
    'applicable-treaties': 'Germany - India BIT (1995)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>Kaufmann-Kohler, G.<br>Arbitrator<br>Appointed by claimant<br>Price, D. M.<br>Arbitrator<br>Appointed by/designated to respondent<br>Stern, B.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Full protection and security, or similar<br><br>Direct expropriation<br><br>Indirect expropriation<br>IIA breaches found<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims',
    'summary': 'Details of investment<br>Indirect shareholding (20 per cent stake via a Singaporean subsidiary) in the Indian company Devas Multimedia, that had concluded contracts with Antrix -related to the Indian Space Research Organisation- for the launch and operation of two satellites.<br>Summary of the dispute<br>Claims arising out of the Government\'s cancellation of a contract concluded with Devas, a company in which the claimant held interests, concerning the provision of broadband services to Indian consumers.',
    'amount-of-compensation': 'Claimed by investor<br>270.00 mln USD<br>Awarded by tribunal<br>93.30 mln USD',
    'latest-documents': 'Petitioner’s Memorandum of Points and Authorities in Opposition to Respondent’s Motion To Stay Enforcement and Post-Judgment Discovery Pending Appeal - 22 Aug 2024',
    'other-documents': 'Can be accessed here',
    'background-scores': '<a href="https://www.iareporter.com/articles/quantum-award-in-deutsche-telekom-v-india-surfaces/" target="_blank" rel="noopener noreferrer">https://www.iareporter.com/articles/quantum-award-in-deutsche-telekom-v-india-surfaces/</a>'
  },
  'KHML v. India': {
    'case-name': 'KHML v. India',
    'full-case-name': 'Khaitan Holdings Mauritius Limited v. India',
    'case-number': 'PCA Case No. 2018-50',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '1 Oct 2013',
    'seat-of-arbitration': 'The Hague',
    'industries': 'Telecommunication',
    'status-of-case': 'Pending',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Mr. James Lloyd Loftis<br>Ms. Sophie Freelove<br>Ms. Merra Kurubalan<br>Mr. Kartik Rajpal<br>VINSON & ELKINS LLP<br><br>Mr. Mark Beeley<br>Ms. Sarah Stockley<br>Ms. Harriet Foster<br>ORRICK, HERRINGTON & SUTCLIFFE (UK) LLP',
    'parties-respondent': 'Mr. George Kahale III<br>Mr. Simon Batifort<br>Ms. Lise Johnson<br>Mr. Fuad Zarbiyev<br>Mr. Amrane Medjani<br>Ms. Claudia King<br>Mr. Arthad Kurlekar<br>Ms. Medi Coulson<br>CURTIS, MALLET-PREVOST, COLT & MOSLE LLP<br><br>Ms. R. V. Anuradha<br>Mr. Piyush Joshi<br>Ms. Sumiti Yadava<br>Ms. Vatsla Bhatia<br>Ms. Indumugi C.<br>CLARUS LAW ASSOCIATES',
    'tribunal-composition': 'Arbitrator<br>Appointed by claimant<br>Xavier, F. (replaced)<br>Arbitrator<br>Appointed by/designated to respondent<br>Stern, B.<br>President<br>McLachlan, C. A.<br>Arbitrator<br>Appointed by claimant<br>Rowley, J. W.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Minority shareholding (27 per cent) in Loop Telecom, a telecommunications company that held twenty one 2G licences in India.<br>Summary of the dispute<br>Claims arising out of the cancellation by India\'s Supreme Court of a telecoms licence held by a company in which the claimant had invested, and its reassignment through a public auction process.',
    'amount-of-compensation': 'Claimed by investor<br>1400.00 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Judgment of the Hague District Court - 25 Jan 2023',
    'other-documents': 'Order of the Delhi High Court - 29 Jan 2019<br>Order of the Delhi High Court - 25 Jan 2019',
    'background-scores': '<a href="http://www.moneylife.in/article/khaitan-holdings-files-international-arbitration-against-indian-govt/34691.html" target="_blank" rel="noopener noreferrer">http://www.moneylife.in/article/khaitan-holdings-files-international-arbitration-against-indian-govt/34691.html</a>'
  },
  'Devas v. India (I)': {
    'case-name': 'Devas v. India (I)',
    'full-case-name': 'CC/Devas (Mauritius) Ltd., Devas Employees Mauritius Private Limited, and Telcom Devas Mauritius Limited v. Republic of India (I)',
    'case-number': 'PCA Case No. 2013-0',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '3 July 2012',
    'seat-of-arbitration': 'The Hague',
    'industries': 'Telecommunication, Wireless communication activities',
    'status-of-case': 'Decided in favor of investor',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Mr. Jim Fleming<br>Mr. Arun Gupta<br>Mr. Rajendra Singh<br>Mr. Serge Martin<br>Mr. Ramachandran Viswanathan<br>Mr. Lawrence Babbio<br><br>CC/Devas (Mauritius) Ltd,. <br><br>Telcom Devas Mauritius Limited<br><br>Devas Employees Mauritius Private Limited<br><br>Mr. Rahim Moloo<br>Mr. Matthew D. McGill<br>Ms. Ankita Ritwik<br>Ms. Alexa Romanelli<br>Mr. Praharsh Johorey<br>Gibson, Dunn & Crutcher LLP',
    'parties-respondent': 'Her Excellency Ms. Reenat Sandhu, Ambassador of India to the Kingdom of the Netherlands<br>Ms. K.C. Sowmya, Counsellor (Legal)<br>Embassy of India, The Hague, The Netherlands<br><br>Mr. Abhishek Singh, Joint Secretary (ED)<br>Mr. Siddharth Malik, Director (ED)<br>Mr. George Pothan Poothicote, Legal Consultant<br>Mr. Arpit Mallick, Consultant (Legal)<br>Ms. Sindhu K Acharya, Consultant (Legal)<br>Ministry of External Affairs<br><br>Smt. Sandhya Venugopal Sharma, Additional Secretary<br>Dr. M. Subramanyam, Joint Secretary<br>Mr. M. S. Krishnan, Officer on Special Duty<br>Department of Space<br><br>Ms. Reetu Jain, Economic Adviser, Investment Division<br>Ms. Supriya Anand, Deputy Director, Investment Division<br>Department of Economic Affairs<br><br>Dr. Niten Chandra, Law Secretary<br>Dr. Rajiv Mani, Additional Secretary<br>Dr. R.J.R. Kasibhatla, Additional Legal Adviser<br>Departament of Legal Affairs<br><br>Legal Counsel<br><br>Ms. Melanie Van Leeuwen<br>Mr. Stijn Wilbers<br>Mr. David Lee<br>Vanguard International Dispute Resolution',
    'tribunal-composition': 'President<br>Lalonde, M.<br>Arbitrator<br>Appointed by claimant<br>Haigh, D.<br>Arbitrator<br>Appointed by claimant<br>Orrego Vicuña, F. (replaced)<br>Arbitrator<br>Appointed by/designated to respondent<br>Singh, A. D.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Indirect expropriation<br><br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Most-favoured nation treatment<br><br>Arbitrary, unreasonable and/or discriminatory measures<br><br>Transfer of funds<br>IIA breaches found<br>Indirect expropriation<br><br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims',
    'summary': 'Details of investment<br>Shareholding in Devas Multimedia Private Limited, an Indian company that had concluded a telecommunication contract with an Indian state entity under the control of the Indian Space Research Organization.<br>Summary of the dispute<br>Claims arising out of the alleged Government\'s cancellation of an agreement to lease capacity in the S-Band, part of the electromagnetic spectrum, for claimants\' subsidiary to launch two satellites to provide multimedia services to mobile users across India.',
    'amount-of-compensation': 'Claimed by investor<br>580.00 mln USD<br>Awarded by tribunal<br>111.30 mln USD',
    'latest-documents': 'Decision on Consequential Matters of the High Court of Justice of England and Wales [2025] EWHC 1189 - 16 May 2025',
    'other-documents': 'Can be accessed here',
    'background-scores': '<a href="http://www.pcacases.com/web/view/46" target="_blank" rel="noopener noreferrer">http://www.pcacases.com/web/view/46</a>'
  },
  'Naumchenko and others v. India': {
    'case-name': 'Naumchenko and others v. India',
    'full-case-name': 'Maxim Naumchenko, Andrey Poluektov and Tenoch Holdings Limited v. The Republic of India',
    'case-number': 'PCA Case No. 2013-23',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2012',
    'seat-of-arbitration': 'Data Not Available',
    'industries': 'Information and communication, Telecommunications',
    'status-of-case': 'Decided in favor of State',
    'claimant-country': 'Russian Federation<br>Cyprus',
    'applicable-treaties': 'India - Russian Federation BIT (1994)<br>Cyprus - India BIT (2002)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Mr. Gaëtan Verhoosel<br>Mr. Luke Sobota<br>THREE CROWNS LLP',
    'parties-respondent': 'Mr. George Kahale III<br>Mr. Benard V. Preziosi, Jr.<br>Mr. Kabir Duggal<br>Mr. Fuad Zarbiyev<br>Mr. Fernando Tupa<br>CURTIS, MALLET-PREVOST, COLT & MOSLE LLP',
    'tribunal-composition': 'President<br>Sepúlveda Amor, B.<br>Arbitrator<br>Appointed by claimant<br>Brower, C. N.<br>Arbitrator<br>Appointed by/designated to respondent<br>Stern, B.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Arbitrary, unreasonable and/or discriminatory measures<br>IIA breaches found<br>None - all claims dismissed at the merits stage',
    'summary': 'Details of investment<br>Majority shareholding in the Indian telecoms company ByCell India.<br>Summary of the dispute<br>Claims arising out of the withdrawal by Indian authorities of an approval to grant frequency allocation licences to claimants\' local telecoms company ByCell, after it had previously obtained clearance from India\'s Foreign Investment Board.',
    'amount-of-compensation': 'Claimed by investor<br>400.00 mln USD<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Press Release of the Indian Ministry of Finance on Dismissal of BIT Claims - 20 Jan 2020',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.pcacases.com/web/view/6" target="_blank" rel="noopener noreferrer">http://www.pcacases.com/web/view/6</a>'
  },
  'White Industries v. India': {
    'case-name': 'White Industries v. India',
    'full-case-name': 'White Industries Australia Limited v. The Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2010',
    'seat-of-arbitration': 'London',
    'industries': 'Mining, Coal and lignite',
    'status-of-case': 'Decided in favor of investor',
    'claimant-country': 'Australia',
    'applicable-treaties': 'Australia - India BIT (1999)',
    'administering-institution': 'Data Not Available',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'President<br>Rowley, J. W.<br>Arbitrator<br>Appointed by claimant<br>Brower, C. N.<br>Arbitrator<br>Appointed by/designated to respondent<br>Lau, C.',
    'breaches-alleged-found': 'IIA breaches alleged<br>Indirect expropriation<br><br>Fair and equitable treatment/Minimum standard of treatment, including denial of justice claims<br><br>Most-favoured nation treatment<br><br>Transfer of funds<br><br>Other<br>IIA breaches found<br>Most-favoured nation treatment<br><br>Other',
    'summary': 'Details of investment<br>Rights under certain contract concluded with a State-owned mining company, a bank guarantee and an ICC award rendered in White Industries\' favour.<br>Summary of the dispute<br>Claims arising out of alleged judicial delays by the Government of India that left the claimant unable to enforce an ICC award for over nine years concerning a contractual dispute with Coal India, a State-owned mining entity.',
    'amount-of-compensation': 'Claimed by investor<br>8.70 mln AUD (8.80 mln USD)<br>Awarded by tribunal<br>4.10 mln AUD (4.10 mln USD)',
    'latest-documents': 'Final Award - 30 Nov 2011',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://globalarbitrationreview.com/news/article/30167/logjam-indian-courts-triggers-bit-breach/" target="_blank" rel="noopener noreferrer">http://globalarbitrationreview.com/news/article/30167/logjam-indian-courts-triggers-bit-breach/</a>'
  },
  'ABN Amro v. India': {
    'case-name': 'ABN Amro v. India',
    'full-case-name': 'ABN Amro N.V. v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'Netherlands',
    'applicable-treaties': 'India - Netherlands BIT (1995)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'ANZEF v. India': {
    'case-name': 'ANZEF v. India',
    'full-case-name': 'ANZEF Ltd. v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power<br>Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'BNP Paribas v. India': {
    'case-name': 'BNP Paribas v. India',
    'full-case-name': 'BNP Paribas v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'France',
    'applicable-treaties': 'India - France BIT (1997)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Credit Lyonnais v. India': {
    'case-name': 'Credit Lyonnais v. India',
    'full-case-name': 'Credit Lyonnais S.A. (now Calyon S.A.) v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'France',
    'applicable-treaties': 'France - India BIT (1997)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': '',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Credit Suisse v. India': {
    'case-name': 'Credit Suisse v. India',
    'full-case-name': 'Credit Suisse First Boston v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'Switzerland',
    'applicable-treaties': 'India - Switzerland BIT (1997)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Erste Bank v. India': {
    'case-name': 'Erste Bank v. India',
    'full-case-name': 'Erste Bank Der Oesterreichischen Sparkassen AG v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'Austria',
    'applicable-treaties': 'Austria - India BIT (1999)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Data Not Available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Offshore Power v. India': {
    'case-name': 'Offshore Power v. India',
    'full-case-name': 'Offshore Power Production C.V., Travamark Two B.V., EFS India-Energy B.V., Enron B.V., and Indian Power Investments B.V. v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'Netherlands',
    'applicable-treaties': 'India - Netherlands BIT (1995)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Lalonde, M.<br>Unknown<br>Cooke, L.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Majority shareholding, through subsidiary company, of the Indian Dabhol Power Company.<br>Summary of the dispute<br>Claims arising out of respondent alleged failure to protect claimants\' investment in the Dabhol power plant project in India, which resulted in significant losses to the claimants\' financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>4000.00 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Standard Chartered Bank v. India': {
    'case-name': 'Standard Chartered Bank v. India',
    'full-case-name': 'Standard Chartered Bank v. Republic of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2004',
    'seat-of-arbitration': 'N/A',
    'industries': 'Energy - Electric Power, Fossil fuel',
    'status-of-case': 'Settled',
    'claimant-country': 'United Kingdom',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Unknown<br>Schreuer, C. H.<br>Unknown<br>Greenwood, C.<br>President<br>Name not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Creditor of loans associated with the financing of the Dabhol energy project in Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of respondent\'s alleged failure to protect the investor\'s loans in the Dabhol combined cycle power plant project in India, the default of which resulted in significant losses to the claimant\'s financing of the failed project.',
    'amount-of-compensation': 'Claimed by investor<br>42.80 mln USD<br>Awarded through settlement<br>Non-pecuniary relief',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/pdf/2004/investment_investsd_dec17_2004.pdf</a>'
  },
  'Bechtel v. India': {
    'case-name': 'Bechtel v. India',
    'full-case-name': 'Bechtel Enterprises Holdings, Inc. and GE Structured Finance (GESF) v. The Government of India',
    'case-number': 'Data Not Available',
    'nature-of-proceedings': 'Bechtel v. India',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules 1976',
    'respondent-field': 'India',
    'date-of-introduction': '2003',
    'seat-of-arbitration': 'N/A',
    'industries': 'Electricity, gas, steam and air conditioning supply',
    'status-of-case': 'Settled',
    'claimant-country': 'Mauritius',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'Ad hoc Arbitration (Ad hoc Arbitration)',
    'state-gov-involved': 'Maharashtra',
    'parties-claimant': 'Data Not Available',
    'parties-respondent': 'Data Not Available',
    'tribunal-composition': 'Data Not Available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled or discontinued before decision on liability',
    'summary': 'Details of investment<br>Shareholding in local corporations established to operate the Dabhol power project in the state of Maharashtra, India.<br>Summary of the dispute<br>Claims arising out of an alleged reversal in the energy policy of the local government between the beginning of the power project in which the claimants invested and its intended consummation, as a result of political change in the Government.',
    'amount-of-compensation': 'Claimed by investor<br>1200.00 mln USD<br>Awarded through settlement<br>160.00 mln USD',
    'latest-documents': 'Data Not Available',
    'other-documents': 'Data Not Available',
    'background-scores': '<a href="http://www.iisd.org/itn/wp-content/uploads/2010/10/investment_investsd_may5_2005.pdf" target="_blank" rel="noopener noreferrer">http://www.iisd.org/itn/wp-content/uploads/2010/10/investment_investsd_may5_2005.pdf</a>'
  }
};

// Cases where India is the home state of claimant (investor)
const claimantCaseData = {
  'Mittal v. Bosnia and Herzegovina': {
    'case-name': 'Mittal v. Bosnia and Herzegovina',
    'full-case-name': 'ArcelorMittal Zenica B.V. v. Bosnia and Herzegovina',
    'case-number': 'ICSID Case No. ARB/21/37',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'ICSID Arbitration Rules',
    'respondent-field': 'Bosnia and Herzegovina',
    'date-of-introduction': '2023',
    'seat-of-arbitration': 'Washington D.C.',
    'industries': 'Metal, Manufacturing of basic metals',
    'status-of-case': 'Pending',
    'claimant-country': 'India',
    'applicable-treaties': 'Bosnia and Herzegovina - India BIT (2006)',
    'administering-institution': 'ICSID (International Centre for Settlement of Investment Disputes)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'ArcelorMittal Zenica B.V.<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Bosnia and Herzegovina<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Investment in Global Ispat Koksna Industrija d.o.o. Lukavac ("GIKIL"), a producer of metallurgical coke.<br>Summary of the dispute<br>Claims arising out of local authorities\' actions affecting the investment in metallurgical coke production.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Binani v. North Macedonia (II)': {
    'case-name': 'Binani v. North Macedonia (II)',
    'full-case-name': 'Binani Industries Limited v. Republic of North Macedonia (II)',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'North Macedonia',
    'date-of-introduction': '2020',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Mining, Metal ores',
    'status-of-case': 'Pending',
    'claimant-country': 'India',
    'applicable-treaties': 'India - North Macedonia BIT (2009)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Binani Industries Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of North Macedonia<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Indirect expropriation<br>Fair and equitable treatment<br>IIA breaches found<br>Pending',
    'summary': 'Details of investment<br>Concessions to mine lead and zinc held by a local subsidiary, Indo Minerals & Metals, part of the Binani Group of Industries.<br>Summary of the dispute<br>Claims arising out of the Government\'s alleged expropriation of the claimants\' mining concessions and their reassignment to another company by auction.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Patel v. Mozambique': {
    'case-name': 'Patel v. Mozambique',
    'full-case-name': 'Patel Engineering Limited v. Republic of Mozambique',
    'case-number': 'ICSID Case No. ARB/20/5',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'ICSID Arbitration Rules',
    'respondent-field': 'Mozambique',
    'date-of-introduction': '2020',
    'seat-of-arbitration': 'Washington D.C.',
    'industries': 'Transportation, Infrastructure',
    'status-of-case': 'Decided in favour of State',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Mozambique BIT (2009)',
    'administering-institution': 'ICSID (International Centre for Settlement of Investment Disputes)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Patel Engineering Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of Mozambique<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment<br>Indirect expropriation<br>IIA breaches found<br>None - all claims dismissed',
    'summary': 'Details of investment<br>Investments in a project to construct a railway line and develop a new port at the Zambezia coast through a planned public-private partnership.<br>Summary of the dispute<br>Claims arising out of the decision of the Transport and Communications Ministry to conduct a public tender for a concession allegedly promised to the claimant under a 2011 memorandum of interest between the ministry and the claimant; the concession was subsequently awarded to a third party.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>0.00 USD',
    'latest-documents': 'Final Award - 2023',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Khadamat v. Saudi Arabia': {
    'case-name': 'Khadamat v. Saudi Arabia',
    'full-case-name': 'Khadamat Al Kharafi Company v. Kingdom of Saudi Arabia',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Saudi Arabia',
    'date-of-introduction': '2018',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Infrastructure, Construction',
    'status-of-case': 'Decided in favour of State',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Saudi Arabia BIT (2006)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Khadamat Al Kharafi Company<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Kingdom of Saudi Arabia<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>None - all claims dismissed',
    'summary': 'Details of investment<br>Investment in infrastructure and development projects in Saudi Arabia.<br>Summary of the dispute<br>Claims arising out of alleged breaches of investment agreements and regulatory measures affecting the claimant\'s investments.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>0.00 USD',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Simplex v. Libya': {
    'case-name': 'Simplex v. Libya',
    'full-case-name': 'Simplex Infrastructure Limited v. Libya',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Libya',
    'date-of-introduction': '2018',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Construction, Real Estate',
    'status-of-case': 'Discontinued',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Libya BIT (2007)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Simplex Infrastructure Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Libya<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - discontinued',
    'summary': 'Details of investment<br>Investments in the construction of 2,000 residential housing units and related infrastructure in Libya under a contract with the Government.<br>Summary of the dispute<br>Claims arising out of the suspension of the claimant\'s operations due to civil unrest in Libya since February 2011, after the claimant had been awarded a contract by the Government for a housing development project and started construction activities in 2009.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Aggarwal and others v. Bosnia and Herzegovina': {
    'case-name': 'Aggarwal and others v. Bosnia and Herzegovina',
    'full-case-name': 'Anil Aggarwal, Ramesh Aggarwal, Kamal Aggarwal and others v. Bosnia and Herzegovina',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Bosnia and Herzegovina',
    'date-of-introduction': '2017',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Financial Services, Insurance',
    'status-of-case': 'Decided in favour of State',
    'claimant-country': 'India, United States of America',
    'applicable-treaties': 'Bosnia and Herzegovina - India BIT (2006)<br>Bosnia and Herzegovina - United States BIT (2001)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Anil Aggarwal<br>Ramesh Aggarwal<br>Kamal Aggarwal<br>and others<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Bosnia and Herzegovina<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment<br>Indirect expropriation<br>IIA breaches found<br>None - all claims dismissed',
    'summary': 'Details of investment<br>Majority shareholding in Krajina osiguranje a.d. Banja Luka ("Krajina"), a local partly State-owned insurance company.<br>Summary of the dispute<br>Claims arising out of the alleged freeze of the claimants\' shareholding in the insurance company Krajina and other actions allegedly taken by Bosnian regulatory agencies to prevent the claimants from exercising their majority ownership rights in Krajina, after the claimants had accused the Bosnian authorities of fraudulent misrepresentations in the offering prospectus on which they had relied when purchasing the shares.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>0.00 USD',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Binani v. North Macedonia (I)': {
    'case-name': 'Binani v. North Macedonia (I)',
    'full-case-name': 'Binani Industries Limited v. Republic of North Macedonia (I)',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'North Macedonia',
    'date-of-introduction': '2017',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Mining, Metal ores',
    'status-of-case': 'Discontinued',
    'claimant-country': 'India',
    'applicable-treaties': 'India - North Macedonia BIT (2009)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Binani Industries Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of North Macedonia<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Indirect expropriation<br>Fair and equitable treatment<br>IIA breaches found<br>Not applicable - discontinued',
    'summary': 'Details of investment<br>Concessions to mine lead and zinc held by a local subsidiary, Indo Minerals & Metals, part of the Binani Group of Industries.<br>Summary of the dispute<br>Claims arising out of the Government\'s alleged expropriation of the claimants\' mining concessions and their reassignment to another company by auction.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Patel v. Mauritius': {
    'case-name': 'Patel v. Mauritius',
    'full-case-name': 'Patel Engineering Limited v. Republic of Mauritius',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Mauritius',
    'date-of-introduction': '2017',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Infrastructure, Construction',
    'status-of-case': 'Decided in favour of investor',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Mauritius BIT (1998)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Patel Engineering Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of Mauritius<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Data not available',
    'summary': 'Details of investment<br>Data not available<br>Summary of the dispute<br>Data not available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'IMFA v. Indonesia': {
    'case-name': 'IMFA v. Indonesia',
    'full-case-name': 'Indian Metals & Ferro Alloys Limited v. Republic of Indonesia',
    'case-number': 'PCA Case No. 2015-40',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Indonesia',
    'date-of-introduction': '2015',
    'seat-of-arbitration': 'Singapore',
    'industries': 'Mining, Coal and lignite',
    'status-of-case': 'Decided in favour of State',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Indonesia BIT (1999)',
    'administering-institution': 'PCA (Permanent Court of Arbitration)',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Indian Metals & Ferro Alloys Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of Indonesia<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment<br>Indirect expropriation<br>IIA breaches found<br>None - all claims dismissed',
    'summary': 'Details of investment<br>Investments in PT SRI, a local Indonesian company holding a coal mining concession.<br>Summary of the dispute<br>Claims arising out of alleged overlaps between the claimants\' coal mining permits and those of other companies, resulting in conflicting rights to mine coal in the same territory.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>0.00 USD',
    'latest-documents': 'Final Award - 2019',
    'other-documents': 'Data not available',
    'background-scores': '<a href="https://pca-cpa.org/en/cases/221/" target="_blank" rel="noopener noreferrer">https://pca-cpa.org/en/cases/221/</a>'
  },
  'Flemingo DutyFree v. Poland': {
    'case-name': 'Flemingo DutyFree v. Poland',
    'full-case-name': 'Flemingo DutyFree Shop Private Limited v. Republic of Poland',
    'case-number': 'UNCITRAL Arbitration',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'UNCITRAL Arbitration Rules',
    'respondent-field': 'Poland',
    'date-of-introduction': '2014',
    'seat-of-arbitration': 'London',
    'industries': 'Retail, Airport services',
    'status-of-case': 'Decided in favour of investor',
    'claimant-country': 'India',
    'applicable-treaties': 'India - Poland BIT (1996)',
    'administering-institution': 'Ad hoc Arbitration',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Flemingo DutyFree Shop Private Limited<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Republic of Poland<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Fair and equitable treatment<br>Indirect expropriation<br>IIA breaches found<br>Fair and equitable treatment<br>Indirect expropriation',
    'summary': 'Details of investment<br>Indirect 80.68% shareholding in BH Travel Retail Poland Sp. z o.o. ("BH Travel"), which held certain lease agreements for retail stores at Warsaw Chopin Airport.<br>Summary of the dispute<br>Claims arising out of the Polish Airports State Enterprise\'s termination of lease agreements for retail stores at Warsaw Chopin Airport entered into with BH Travel, a duty-free operator in which the claimant held indirect interests.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>25.5 mln USD',
    'latest-documents': 'Final Award - 2016',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Sancheti v. UK': {
    'case-name': 'Sancheti v. UK',
    'full-case-name': 'Sancheti v. United Kingdom',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'Data not available',
    'respondent-field': 'United Kingdom',
    'date-of-introduction': '2006',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Real Estate, Commercial lease',
    'status-of-case': 'Data not available',
    'claimant-country': 'India',
    'applicable-treaties': 'India - United Kingdom BIT (1994)',
    'administering-institution': 'Data not available',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Sancheti<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'United Kingdom<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Data not available',
    'summary': 'Details of investment<br>Lease of a commercial space owned by the city of London.<br>Summary of the dispute<br>Claims arising out of the increase in the rent price for the investor\'s lease of a commercial space owned by the city of London.',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded by tribunal<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  },
  'Sancheti v. Germany': {
    'case-name': 'Sancheti v. Germany',
    'full-case-name': 'Sancheti v. Federal Republic of Germany',
    'case-number': 'Data not available',
    'nature-of-proceedings': 'International',
    'type-of-case': 'Investor-State',
    'rules-of-arbitration': 'Data not available',
    'respondent-field': 'Germany',
    'date-of-introduction': '2000',
    'seat-of-arbitration': 'Data not available',
    'industries': 'Data not available',
    'status-of-case': 'Settled',
    'claimant-country': 'India',
    'applicable-treaties': 'Germany - India BIT (1995)',
    'administering-institution': 'Data not available',
    'state-gov-involved': 'N/A',
    'parties-claimant': 'Sancheti<br><br>Legal Counsel<br>Data not available',
    'parties-respondent': 'Federal Republic of Germany<br><br>Legal Counsel<br>Data not available',
    'tribunal-composition': 'Data not available',
    'breaches-alleged-found': 'IIA breaches alleged<br>Data not available<br>IIA breaches found<br>Not applicable - settled',
    'summary': 'Details of investment<br>Data not available<br>Summary of the dispute<br>Data not available',
    'amount-of-compensation': 'Claimed by investor<br>Data not available<br>Awarded through settlement<br>Data not available',
    'latest-documents': 'Data not available',
    'other-documents': 'Data not available',
    'background-scores': 'Data not available'
  }
};
// Remove autoLink and hover-link logic

document.addEventListener('DOMContentLoaded', function() {
  fetch('/session')
    .then(res => res.json())
    .then(data => {
      if (!data.loggedIn) {
        window.location.href = 'login.html';
      }
    });
});

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.case-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const caseName = link.textContent.trim();
      
      // Check both respondent and claimant case data
      let caseInfo = null;
      if (respondentCaseData[caseName]) {
        caseInfo = respondentCaseData[caseName];
      } else if (claimantCaseData[caseName]) {
        caseInfo = claimantCaseData[caseName];
      }
      
      if (caseInfo) {
        for (const [field, value] of Object.entries(caseInfo)) {
          const el = document.getElementById(field);
          if (el) {
            el.innerHTML = value;
          }
        }
      } else {
        // Clear all fields if no data
        document.querySelectorAll('.accordion-content').forEach(function(el) {
          el.textContent = '';
        });
      }
      openCaseDetail();
    });
  });
  // Accordion logic
  document.querySelectorAll('.accordion-header').forEach(function(header) {
    header.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const expanded = content.style.maxHeight && content.style.maxHeight !== '0px';
      document.querySelectorAll('.accordion-content').forEach(function(c) {
        c.style.maxHeight = null;
      });
      if (!expanded) {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
// Close modal on background click
window.addEventListener('click', function(e) {
  const modal = document.getElementById('case-detail-modal');
  if (e.target === modal) closeCaseDetail();
});

// Add logout functionality
const logoutBtn = document.getElementById('logout-btn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', async function() {
    await fetch('/logout', { method: 'POST' });
    window.location.href = 'index.html';
  });
}

// PAGINATION LOGIC FOR RESPONDENT CASES TABLE
const respondentTable = document.querySelector('#respondent .dashboard-table tbody');
const paginationControls = document.querySelector('.pagination-controls');
const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');
const pageNumberSpan = document.getElementById('page-number');

if (respondentTable && paginationControls) {
  // Collect all rows
  const allRows = Array.from(respondentTable.querySelectorAll('tr'));
  const rowsPerPage = 10;
  let currentPage = 1;
  const totalPages = Math.ceil(allRows.length / rowsPerPage);

  function showPage(page) {
    // Hide all rows
    allRows.forEach(row => row.style.display = 'none');
    // Show only the rows for the current page
    const startIdx = (page - 1) * rowsPerPage;
    const endIdx = startIdx + rowsPerPage;
    allRows.slice(startIdx, endIdx).forEach(row => row.style.display = '');
    // Update page number
    pageNumberSpan.textContent = page;
    // Disable/enable buttons
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
  }

  prevBtn.addEventListener('click', function() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });
  nextBtn.addEventListener('click', function() {
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Initialize
  showPage(currentPage);
}

// PAGINATION LOGIC FOR CLAIMANT CASES TABLE
const claimantTable = document.querySelector('#claimant .dashboard-table tbody');
const claimantPaginationControls = document.querySelector('#claimant .pagination-controls');
const claimantPrevBtn = document.getElementById('prev-page-claimant');
const claimantNextBtn = document.getElementById('next-page-claimant');
const claimantPageNumberSpan = document.getElementById('page-number-claimant');

if (claimantTable && claimantPaginationControls) {
  // Collect all rows
  const allClaimantRows = Array.from(claimantTable.querySelectorAll('tr'));
  const claimantRowsPerPage = 8; // Maximum 8 cases per page
  let claimantCurrentPage = 1;
  const claimantTotalPages = Math.ceil(allClaimantRows.length / claimantRowsPerPage);

  function showClaimantPage(page) {
    // Hide all rows
    allClaimantRows.forEach(row => row.style.display = 'none');
    // Show only the rows for the current page
    const startIdx = (page - 1) * claimantRowsPerPage;
    const endIdx = startIdx + claimantRowsPerPage;
    allClaimantRows.slice(startIdx, endIdx).forEach(row => row.style.display = '');
    // Update page number
    claimantPageNumberSpan.textContent = page;
    // Disable/enable buttons
    claimantPrevBtn.disabled = page === 1;
    claimantNextBtn.disabled = page === claimantTotalPages;
  }

  claimantPrevBtn.addEventListener('click', function() {
    if (claimantCurrentPage > 1) {
      claimantCurrentPage--;
      showClaimantPage(claimantCurrentPage);
    }
  });
  claimantNextBtn.addEventListener('click', function() {
    if (claimantCurrentPage < claimantTotalPages) {
      claimantCurrentPage++;
      showClaimantPage(claimantCurrentPage);
    }
  });

  // Initialize
  showClaimantPage(claimantCurrentPage);
}
