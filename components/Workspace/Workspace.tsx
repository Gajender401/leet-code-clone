'use client'

import { useState } from "react";
import Split from "react-split";
import Playground from "./Playground/Playground";
import { Problem } from "@/src/types/problem";
import Confetti from "react-confetti";
import useWindowSize from "@/src/hooks/useWindowSize";
import ProblemDescription from "./ProblemDescription/ProblemDescription";

type WorkspaceProps = {
	problem: Problem;
};

const Workspace: React.FC<WorkspaceProps> = ({ problem }) => {
	const { width, height } = useWindowSize();
	const [success, setSuccess] = useState(false);
	const [solved, setSolved] = useState(false);


	return (
		<Split className='split' minSize={0}>
			<div className='bg-dark-fill-2'>
				<Playground problem={problem} setSuccess={setSuccess} setSolved={setSolved} />
				{success && <Confetti gravity={0.3} tweenDuration={4000} width={width - 1} height={height - 1} />}
			</div>
		</Split>
	);
};
export default Workspace;