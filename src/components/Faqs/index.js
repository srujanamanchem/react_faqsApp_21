import FaqItem from '../FaqItem/index'

import './index.css'

const Faq = props => {
  const {faqsList} = props
  return (
    <div className="app-container">
      <div className="faq-card">
        <h1 className="heading">FAQs</h1>
        <ul className="faqs-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faq
