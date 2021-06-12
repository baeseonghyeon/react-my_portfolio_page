import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import Popup from '../../Popup';
import useMediaQuery from '../../../hook/useMediaQuery';
import './CardHover.scss';
import externalLinkText from '../../../lib/externalLinkText';

function CardHover(props) {
  const { item } = props;

  // Popup Touch Screen Redirect Set
  const history = useHistory();
  const [width] = useMediaQuery();
  const touchRedirect = (url, _blank) => {
    if (width > 769) {
      if (_blank) {
        window.location.href = url;
      } else {
        history.push(url);
      }
    }
  };

  return (
    <div className="desc-card ft-s-s" id={`desc${item.id}`}>
      <Popup
        id={`desc${item.id}`}
        title={`${item.info.cate} - ${item.info.role}`}
        padding
        highlight={false}
      >
        <span>
          <p className="desc">
            {item.content.text.substr(0, item.eg ? 110 : 65)}
            {item.content.text.length > (item.eg ? 110 : 65) ? (
              <span>
                ...
                <Link
                  to={`/works/${item.id}`}
                  onTouchStart={() => touchRedirect(`/works/${item.id}`)}
                >
                  {' '}
                  read more
                </Link>
              </span>
            ) : (
              ''
            )}
            <br />
          </p>
        </span>
        <span>
          {/* 외부 링크 */}
          {item.links &&
            item.links.map((link) => {
              return (
                <a
                  href={link.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block"
                  onTouchStart={() => touchRedirect(link.src, true)}
                >
                  {externalLinkText(link.type)}
                  <br />
                </a>
              );
            })}

          {/* 더보기 버튼 */}
          {item.content.text.length < (item.eg ? 110 : 65) && (
            <Link
              className="more-btn d-block"
              to={`/works/${item.id}`}
              onTouchStart={() => touchRedirect(`/works/${item.id}`)}
            >
              Read More →
            </Link>
          )}
        </span>
      </Popup>
    </div>
  );
}

export default React.memo(CardHover);
