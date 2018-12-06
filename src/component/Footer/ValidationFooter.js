import React, { Component } from 'react';
import './ValidationFooter.sass';

import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export class ValidationFooter extends Component {
    render(){
        return(
            <div className="validation-footer flex-row-center">
                <div className="validation-footer-left flex-row-center">
                    
                </div>
                <div className="validation-footer-right flex-row-center">
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold disable">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="disable"><FontAwesomeIcon icon={faChevronLeft}/></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold">1-10 / 125</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink><FontAwesomeIcon icon={faChevronRight}/></PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink className="font-weight-bold">12</PaginationLink>
                        </PaginationItem>
                    </Pagination>
                </div>
            </div>
        )
    }
}