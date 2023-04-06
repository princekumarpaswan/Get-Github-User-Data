// https://api.github.com/users/princekumarpaswan

const handleClick = () => {
    const searchData = document.getElementById("input").value
    if (searchData) {
        dataSearch(searchData)
    } else {
        alert("Please enter User Name")
    }

}

const dataSearch = async (data) => {
    try {
        const response = await fetch(`https://api.github.com/users/${data}`)
        const gotData = await response.json()
        console.log(gotData);
        show(gotData)

    } catch (error) {
        alert(error + "Invald User name")
    }
}

// showing data 

const show = (data) => {
    if (data.id === undefined) {
        alert("Invald user name")
    } else {
        const showData = `
    
    <div class="mt-[80px]">
                <img class="rounded-[10%] " src="${data.avatar_url}" alt="User img">
            </div>

            <div class="mt-[30px] ">
                <div class="mt-[30px] text-[20px] ml-[2rem] items-center">
                    <!-- user Name -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-user-circle" aria-hidden="true"></i>
                        <h1>User Name: ${data.login}</h1>
                    </div>

                    <!-- Name -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-user" aria-hidden="true"></i>
                        <h1>Name: ${data.name}</h1>
                    </div>

                    <!-- Biodata -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-asterisk" aria-hidden="true"></i>
                        <h1>Bio: ${data.bio}</h1>
                    </div>

                    <!-- follower -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-rss" aria-hidden="true"></i>
                        <h1>Follower: ${data.followers}</h1>
                    </div>

                    <!-- following -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-anchor" aria-hidden="true"></i>
                        <h1>Following: ${data.followning}</h1>
                    </div>

                    <!-- twitter -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-twitter-square" aria-hidden="true"></i>
                        <h1>Twitter: ${data.twitter_username}</h1>
                    </div>

                    <!-- location -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-map-marker" aria-hidden="true"></i>
                        <h1>Location: ${data.location}</h1>
                    </div>

                    <!-- total repo -->
                    <div class=" border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-grav" aria-hidden="true"></i>
                        <h1>Total repo: ${data.public_repos}</h1>
                    </div>

                    <!-- follower url -->
                    <div class=" hidden lg:flex border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-address-book" aria-hidden="true"></i>
                        <h1>Follower url: <a>${data.followers_url}</a></h1>
                    </div>

                    <!-- following url -->
                    <div class=" hidden lg:flex border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-address-book" aria-hidden="true"></i>
                        <h1>Following url: <a>${data.following_url}</a></h1>
                    </div>

                    <!-- repo url -->
                    <div class=" hidden lg:flex border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-chain-broken" aria-hidden="true"></i>
                        <h1>Repo url: <a>${data.repos_url}</a></h1>
                    </div>

                    <!-- Created Profile -->
                    <div class=" hidden lg:flex border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-plus" aria-hidden="true"></i>
                        <h1>Created Profile: ${data.created_at}</h1>
                    </div>

                    <!-- Last updated -->
                    <div class=" hidden lg:flex border-solid flex flex-wrap gap-[10px] items-center  border-2 border-black text-center p-1"> <i
                            class="fa fa-pencil" aria-hidden="true"></i>
                        <h1>Last updated: ${data.updated_at}</h1>
                    </div>
                </div>
            </div>

    `

        document.getElementById("mainCard").innerHTML = showData
    }

}