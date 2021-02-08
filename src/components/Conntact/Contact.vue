<template>
    <div class="contact-me">
        <div class="numbered-header">
            <i class='bx bx-phone-incoming'></i>
            Contact Me
        </div>
        <p class="header-des">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero fugiat, officiis suscipit quaerat eligendi libero, eveniet consequuntur repellendus recusandae saepe tenetur laborum quo quam. Debitis nam architecto harum earum assumenda!</p>
        <ul>
            <li><i class='bx bxl-facebook-circle' ></i></li>
            <li>
                <i class='bx bxl-linkedin-square' ></i>
            </li>
            <li>
                <i class='bx bxl-instagram-alt' ></i>
            </li>
            <li>
                <i class='bx bxl-twitter' ></i>
            </li>
        </ul>
        <button>
            Contact
        </button>
    </div>
</template>
<style lang="scss">
    .contact-me {
        button {
            border-radius: 20px;
            border: none;
            padding: 15px 40px;
            background: var(--gradient);
            color: #eee;
            cursor: pointer;
            user-select: none;
            outline: none;
            transition: 0.3s;
            border: 2px solid #fff;

            &:active {
                background: var(--highlight);
            }
        }

        ul {
            list-style: none;
            display: flex;
            gap: 20px;
            margin: 0;
            padding: 0;
            li {
                font-size: 50px;
                opacity: 0.3;
                transition: 0.3s;
                cursor: pointer;

                &:hover {
                    opacity: 1;
                    color: var(--highlight);
                }
            }
        }
    }
</style>