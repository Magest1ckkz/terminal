document.addEventListener('contextmenu', event => event.preventDefault());

    const input = document.querySelector('input');
		const output = document.querySelector('#output');

		input.addEventListener('keypress', (event) => {
			if (event.key === 'Enter') {
				const value = input.value.trim();
				switch (value) {

					case 'test':
						output.innerHTML = '<p>test</p>';
						break;

					 case 'help':
                        output.innerHTML = '<p>MageTerminal Help Page (0.0.4)<br><br>help - Shows this message.<br>test - A testing string.<br>date - Output the current date and time.<br>exit - Exit the terminal and return to the main page.</p>';
					    break;

                    case 'date':
                    const now = new Date();
                let formattedDate;
                if (now.getDate() < 10) {
                    formattedDate = `0${now.getDate()}-`;
                } else {
                    formattedDate = `${now.getDate()}-`;
                }
                if (now.getMonth() + 1 < 10) {
                    formattedDate += `0${now.getMonth() + 1}-`;
                } else {
                    formattedDate += `${now.getMonth() + 1}-`;
                }
                formattedDate += now.getFullYear();
                const hours = now.getHours().toString().padStart(2, '0');
                const minutes = now.getMinutes().toString().padStart(2, '0');
                const seconds = now.getSeconds().toString().padStart(2, '0');
                output.innerHTML = `<p>${formattedDate} ${hours}:${minutes}:${seconds}</p>`;
                break;

                case 'exit':
                    location.href = "https://magest1ckkz.github.io/";
                    break;

					default:
						output.innerHTML = `Invalid command: ${input.value}. Type "help" to show all commands.`;
						break;
				}
				input.value = '';
			}
		});