import classNames from 'classnames';
import React from 'react';
import { ThemedScrollbars } from '@deriv/components';
import { isMobile } from '@deriv/shared/utils/screen';

export const ScrollbarsContainer = ({ children, className, scroll_offset }) => (
    <ThemedScrollbars
        is_native={isMobile()}
        autoHide
        style={{
            height: scroll_offset ? `calc(100% - ${scroll_offset})` : '100%',
        }}
    >
        <div className={classNames('account__scrollbars_container', className)}>{children}</div>
    </ThemedScrollbars>
);
