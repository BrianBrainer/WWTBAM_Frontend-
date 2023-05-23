import React from "react";
import './QuestionTrackerComponent.css'
import Lifelines from "./LifeLineComponent";

const QuestionTracker = () => {

    const numbers = Array.from({ length: 15 }, (_, index) => index + 1);

    return (
        <div className="questionTracker">
             <div>
                <Lifelines />
            </div>
            <div className="numberList">
                <div className="numberItem">
                    15. ££££££
                </div>
                <div className="numberItem">
                    14. ££££££
                </div>
                <div className="numberItem">
                    13. ££££££
                </div>
                <div className="numberItem">
                    12. ££££££
                </div>
                <div className="numberItem">
                    11. ££££££
                </div>
                <div className="numberItem">
                    10. ££££££
                </div>
                <div className="numberItem">
                    9. ££££££
                </div>
                <div className="numberItem">
                    8. ££££££
                </div>
                <div className="numberItem">
                    7. ££££££
                </div>
                <div className="numberItem">
                    6. ££££££
                </div>
                <div className="numberItem">
                    5. ££££££
                </div>
                <div className="numberItem">
                    4. ££££££
                </div>
                <div className="numberItem">
                    3. ££££££
                </div>
                <div className="numberItem">
                    2. ££££££
                </div>
                <div className="numberItem">
                    1. ££££££
                </div>
            </div>
        </div>
    )
}

export default QuestionTracker