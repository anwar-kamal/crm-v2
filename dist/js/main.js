
//login-signup toggel passwords

if ( document.querySelectorAll( '.eye__password' ) ) {
	const eyes = document.querySelectorAll( '.eye__password' )
	eyes.forEach( ( eye, index ) => {
		eye.addEventListener( 'click', function () {
			const password = document.querySelectorAll( '.input-password' )[ index ]
			if ( eye.classList.contains( "fa-eye" ) ) {
				eye.classList.replace( "fa-eye", "fa-eye-slash" )
			} else if ( eye.classList.contains( "fa-eye-slash" ) ) {
				eye.classList.replace( "fa-eye-slash", "fa-eye" )
			}
			const type = password.getAttribute( "type" ) === "password" ? "text" : "password"
			password.setAttribute( "type", type )
		} )
	} )
}


// mark notification as viewd
function markAsViewed ( notification ) {
	notification.classList.add( 'viewed' )
}


// reset input
function resetForm ( formID ) {
	document.getElementById( formID ).reset()
}

function resetFormAll () {
	resetForm( "select" )
	resetForm( "date" )
}
// progress bar


const progress = document.getElementById( "progress" )
const prev = document.getElementById( "prev" )
const next = document.getElementById( "next" )
const circles = document.querySelectorAll( ".circle" )

let currentActive = 1
if ( next ) {
	next.addEventListener( "click", () => {
		currentActive++
		if ( currentActive > circles.length ) currentActive = circles.length
		update()
	} )

}

if ( prev ) {
	prev.addEventListener( "click", () => {
		currentActive--
		if ( currentActive < 1 ) currentActive = 1
		update()
	} )
}
const update = () => {
	circles.forEach( ( circle, index ) => {
		if ( index < currentActive ) {
			circle.classList.add( "active" )
			if ( index === currentActive - 1 ) {
				circle.classList.add( "current" )
			} else {
				circle.classList.remove( "current" )
			}
		} else {
			circle.classList.remove( "active", "current" )
		}
	} )

	const actives = document.querySelectorAll( ".active" )
	progress.style.width = ( ( actives.length - 1 ) / ( circles.length - 1 ) ) * 100 + "%"

	if ( currentActive === 1 ) {
		prev.disabled = true
	} else if ( currentActive === circles.length ) {
		next.innerHTML = 'Confirm'
		next.removeAttribute( 'onclick' ) // Remove any 
		next.addEventListener( 'click', function () {
			Alpine.store( 'modalConfirmOrder', true )
		} )
	}
	else {
		prev.disabled = false
		next.disabled = false
	}
}

// see more

function expand ( elementId ) {
	const text = document.getElementById( elementId )
	if ( text.classList.contains( 'line-clamp-1' || 'truncate' ) ) {

		text.classList.remove( 'line-clamp-1' || 'truncate' )
		text.classList.add( '!line-clamp-none' )
	}
}





if ( document.getElementById( 'fullcalendar' ) ) {

	document.addEventListener( 'DOMContentLoaded', function () {
		var calendarEl = document.getElementById( 'fullcalendar' )
		var calendar = new FullCalendar.Calendar( calendarEl, {
			initialView: 'dayGridMonth'

		} )
		calendar.render()
	} )


}

