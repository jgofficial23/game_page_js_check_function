question_turn = "player1";
answer_turn = "player2";


function check()
{
	get_answer = document.getElementById("inputbox").value;
	answer = get_answer.toLowerCase();
	console.log("answer in lower case - " + answer);
	if(answer == lowerword)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
        //complete the else loop
		else 
		{
			
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ;
	}
    //complete the else loop
	else 
	{
		

	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ;
	}
    //complete the else loop
	else 
	{
		
	}

    document.getElementById("output").innerHTML = "";
}
