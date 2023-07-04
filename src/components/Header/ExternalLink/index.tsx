import { ComponentProps } from 'react';
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> & {
    title: string;
    iconHidden?: boolean;
    variant?: "iconLeft";
    as?: string;
}
export function ExternalLink({ title, iconHidden=false, variant, ...rest }: ExternalLinkProps){
    return(
        <ExternalLinkContainer {...rest}>
            {variant === 'iconLeft' && <FontAwesomeIcon icon={faChevronLeft} />}
            {title}
            {iconHidden && <FontAwesomeIcon icon={faUpRightFromSquare} />}
        </ExternalLinkContainer>
    )
}