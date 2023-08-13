import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    clickXHandler = evt => {
        this.setState(prevState => {
            return {
                [evt]: prevState[evt] + 1,
            };
        });
    };

	countTotalFeedback = () => {
		const { good, neutral, bad } = this.state;
		const result = good + neutral + bad;
		return result;
	};

	countPositiveFeedbackPercentage = () => {
		const result = this.countTotalFeedback();
		const { good } = this.state;
        if (result !== 0) {
            const percentage = (good * 100) / result;
            return Math.round(percentage);
        }
        return 0;
	};

    render() {
        return (
            <div>
                <h1>Please leave feedback</h1>
                <div>
                    <button onClick={() => {this.clickXHandler('good')}}>Good</button>
                    <button onClick={() => {this.clickXHandler('neutral')}}>Neutral</button>
                    <button onClick={() => {this.clickXHandler('bad')}}>Bad</button>
                </div>
                <div>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.countTotalFeedback()}</li>
                        <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>

                    </ul>
                </div>
            </div>
        );
    };
};