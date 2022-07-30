import {Component} from 'react'

import './index.css'

const PLUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS_IMAGE =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isAnsVisible: false,
  }

  onClickShowOrHideAnswer = () => {
    this.setState(prevState => ({isAnsVisible: !prevState.isAnsVisible}))
  }

  render() {
    const {isAnsVisible} = this.state
    const {faqDetails} = this.props
    const {questionText, answerText} = faqDetails
    const imgUrl = isAnsVisible ? MINUS_IMAGE : PLUS_IMAGE
    const imgAlt = isAnsVisible ? 'minus' : 'plus'
    return (
      <li className="faq-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="btn"
            onClick={this.onClickShowOrHideAnswer}
          >
            <img src={imgUrl} alt={imgAlt} className="image" />
          </button>
        </div>
        {isAnsVisible && (
          <div className="answer-container">
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}
export default FaqItem
