import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'
import { MdClose } from 'react-icons/md'

ReactModal.setAppElement('#root')

function CustomModal({ modalOpen, onRequestClose, children }) {
  return (
    <div>
      <ReactModal
        isOpen={modalOpen}
        closeTimeoutMS={200}
        onRequestClose={onRequestClose}
        style={{
          content: {
            padding: '0px',
          },
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <div>貼文</div>
            <div
              role="button"
              tabIndex="0"
              onKeyDown={() => onRequestClose()}
              onClick={() => onRequestClose()}
            >
              <MdClose />
            </div>
          </div>
          {children}
        </div>
      </ReactModal>
    </div>
  )
}

export default CustomModal

CustomModal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
}
