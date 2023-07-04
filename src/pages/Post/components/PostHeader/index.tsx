import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { PostHeaderContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Home";
import { Spinner } from "../../../../components/Spinner";
import { relativeDateFormatter } from "../../../../utils/formatter";

interface PostHeaderProps {
    postData: IPost;
    isLoading: boolean;
}

export function PostHeader({ postData, isLoading }: PostHeaderProps) {
    const navigate = useNavigate();
    const formattedDate = relativeDateFormatter(postData?.created_at)

    function goBack() {
        navigate(-1);
    }

    return (
        <PostHeaderContainer>
            {isLoading ? <Spinner /> : (
                <>
                    <header>
                        <ExternalLink
                            as="button"
                            title="Voltar"
                            onClick={goBack}
                            variant="iconLeft"
                        />
                        <ExternalLink
                            title="Ver no Github"
                            href={postData.html_url}
                            target="_blank"
                            iconHidden={true}
                        />
                    </header>

                    <h1>{postData.title}</h1>

                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            {postData.user.login}
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faCalendar} />
                            {formattedDate}
                        </li>

                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            {postData.comments} {postData.comments > 1 ? 'comentários' : 'comentário'}
                        </li>
                    </ul>
                </>
            )}
        </PostHeaderContainer>
    );
}