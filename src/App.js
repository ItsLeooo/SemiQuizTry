import { useState } from "react";
import "./App.css";
import QuestionList from "./components/QuestionList/QuestionList";


const App = () => {
	const [gameStarted, setGameStarted] = useState(false);
	const [showNoQuestionsError, setShowNoQuestionsError] = useState(false);
	const [gameOptions, setGameOptions] = useState(
		{
			category: "",
			difficulty: "",
			type: ""
		}
	);

	const handleGameStart = () => setGameStarted(prevState => !prevState);

	const handleNoQuestionsError = boolean => setShowNoQuestionsError(boolean);
	
	const handleChange = event => {
		const { name, value } = event.target;

		setGameOptions(prevGameOptions => {
			return {
				...prevGameOptions,
				[name]: value
			}
		});
	}

	return (
		<main>
			
			{
				gameStarted
				?
					<section className="game-container">
						<QuestionList
							gameOptions={gameOptions}
							handleGameStart={handleGameStart}
							handleNoQuestionsError={handleNoQuestionsError}
						/>
					</section>
				:
					<section className="game-intro">
						<h1 className="game-title">QuizMe Code Edition</h1>
						<p className="game-text">Ready to test your knowledge?</p>

						{showNoQuestionsError &&
							<h2 className="noQuestions-text">
								Oops! We couldn't find any questions with these options!
							</h2>
						}

						<div className="gameOptions-container">
							<div className="select-container">
								<label className="custom-label" htmlFor="category">Category:</label>

								<select
									name="category"
									id="category"
									className="custom-select"
									value={gameOptions.category}
									onChange={handleChange}
								>
									<option value="">Any Category</option>
									<option value="9">General Knowledge</option>
									<option value="10">Books Related</option>
									<option value="11">Film Related</option>
									<option value="12">Music Related</option>
									<option value="18">IT Related</option>
									<option value="19">Science: Mathematics</option>
									<option value="20">Mythology</option>
									<option value="21">Sports</option>
									<option value="23">History</option>
								</select>
							</div>
							
							<div className="select-container">
								<label className="custom-label" htmlFor="difficulty">Difficulty:</label>

								<select
									name="difficulty"
									id="difficulty"
									className="custom-select"
									value={gameOptions.difficulty}
									onChange={handleChange}
								>
									<option value="">Any Difficulty</option>
									<option value="easy">Easy</option>
									<option value="medium">Medium</option>
									<option value="hard">Hard</option>
								</select>
							</div>
							
							<div className="select-container">
								<label className="custom-label" htmlFor="type">Type of questions:</label>

								<select
									name="type"
									id="type"
									className="custom-select"
									value={gameOptions.type}
									onChange={handleChange}
								>
									<option value="">Any Type</option>
									<option value="multiple">Multiple Choice</option>
									<option value="boolean">True / False</option>
								</select>
							</div>
						</div>

						<button className="btn-primary" onClick={handleGameStart}>Start Quiz</button>
					</section>
			}
		</main>
	);
}

export default App;
