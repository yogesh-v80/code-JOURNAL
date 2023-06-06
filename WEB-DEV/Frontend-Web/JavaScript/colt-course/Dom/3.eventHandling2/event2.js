//reveal Event

const revealBtn = document.querySelector('.reveal-btn')
const hiddenContent = document.querySelector('.hidden-content')

function revealContent()
{
	if(hiddenContent.classList.contains('reveal-btn'))
		{
			hiddenContent.classList.remove('reveal-btn')

		}
	else
	{
		hiddenContent.classList.add('reveal-btn')
		//there reveal-btn style will apply on .hidden-content
		//and text will appear
		//because display:none property is overridden by display:block
	}
}

revealBtn.addEventListener("click", revealContent)